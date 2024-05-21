import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { format } from "date-fns";
const decoder = new TextDecoder();
const radar = [];
export async function GET(request) {
  const { search } = request.nextUrl;
  const { type, identity, location } = qs(search);
  if (!identity) {
    return NextResponse.json({ error: "identity error" }, { status: 500 });
  }
  // radar
  if (location) {
    // const prev = radar.findIndex((it) =>
    //   String(it).split("@").includes(identity)
    // );
    // if (prev >= 0) {
    //   radar[prev] = `${location}@${identity}`;
    // } else {
    //   radar.push(`${location}@${identity}`);
    // }
    radar.push(`${location}@${identity}`);
    if (radar.length > 9) {
      radar.shift();
    }
    return NextResponse.json({ data: radar }, { status: 200 });
  }
  // task
  const { rows } =
    await sql`SELECT * FROM tasks WHERE user_id = ${identity} AND type = ${type};`;
  return NextResponse.json({ rows }, { status: 200 });
}

export async function POST(request) {
  const { value } = await request.body.getReader().read();
  const { identity, title, content, type, points } = JSON.parse(
    decoder.decode(value)
  );
  const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const uid = Date.now();
  await sql`INSERT INTO tasks (uid,user_id,title,content,type,points,create_time)
  VALUES (${uid},${identity},${title},${content},${type},${points},${time});`;
  return NextResponse.json(
    {
      data: true,
    },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const { search } = request.nextUrl;
  const { uid, identity } = qs(search);
  if (identity) {
    const type = "0";
    sql`DELETE FROM tasks WHERE type = ${type} AND user_id = ${identity};`;
  }
  if (uid) {
    sql`DELETE FROM tasks WHERE uid = ${uid};`;
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
  sql`UPDATE tasks SET perfect_time = ${time} WHERE uid = ${uid};`;
  return NextResponse.json(
    {
      data: true,
    },
    { status: 200 }
  );
}
