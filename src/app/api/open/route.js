import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { format } from "date-fns";

const decoder = new TextDecoder();
const ip_location_api = "https://ipapi.com/ip_api.php";
const amap_web_key = "382ac00b0f966675fb9d96027c61811c";
const regeo_api = "https://restapi.amap.com/v3/geocode/regeo";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { type, identity } = qs(search);
  if (!identity) {
    return NextResponse.json({ error: "identity error" }, { status: 500 });
  }
  // task
  const { rows } =
    await sql`SELECT * FROM tasks WHERE user_id = ${identity} AND type = ${type};`;
  return NextResponse.json({ rows }, { status: 200 });
}

export async function POST(request) {
  const { value } = await request.body.getReader().read();
  try {
    const { identity, title, content, type, points } = JSON.parse(
      decoder.decode(value)
    );
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const uid = Date.now();
    await sql`INSERT INTO tasks (uid,user_id,title,content,type,points,create_time)
      VALUES (${uid},${identity},${title},${content},${type},${points},${time});`;
  } catch (e) {
    const xff = request.headers.get("x-forwarded-for");
    // 获取经纬度
    const { longitude, latitude } = await fetch(
      `${ip_location_api}?ip=${xff}`
    ).then((res) => res.json());
    // 查询区域
    const { info, regeocode } = await fetch(
      `${regeo_api}?key=${amap_web_key}&location=${longitude},${latitude}`
    ).then((res) => res.json());
    if (info === "OK") {
      const { addressComponent } = regeocode;
      const { identity, title, content, type, points } = {
        title: "location",
        content: addressComponent.adcode,
        points: 1,
        identity: `${decoder.decode(value)}`,
        type: 0,
      };
      const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
      const uid = Date.now();
      await sql`INSERT INTO tasks (uid,user_id,title,content,type,points,create_time)
        VALUES (${uid},${identity},${title},${content},${type},${points},${time});`;
    }
  } finally {
    return NextResponse.json(
      {
        data: true,
      },
      { status: 200 }
    );
  }
}

export async function DELETE(request) {
  const { search } = request.nextUrl;
  const { uid, identity } = qs(search);
  if (identity) {
    const type = "0";
    await sql`DELETE FROM tasks WHERE type = ${type} AND user_id = ${identity};`;
  }
  if (uid) {
    await sql`DELETE FROM tasks WHERE uid = ${uid};`;
  }
  return NextResponse.json(
    {
      data: true,
    },
    { status: 200 }
  );
}

export async function PUT(request) {
  const { search } = request.nextUrl;
  const { uid } = qs(search);
  const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  await sql`UPDATE tasks SET perfect_time = ${time} WHERE uid = ${uid};`;
  return NextResponse.json(
    {
      data: true,
    },
    { status: 200 }
  );
}
