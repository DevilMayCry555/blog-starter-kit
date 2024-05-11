import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { route, ...rest } = qs(search);
  if (route === "task") {
    const { type, identity } = rest;
    const { rows } =
      await sql`SELECT * FROM tasks WHERE user_id = ${identity} AND type = ${type};`;
    return NextResponse.json({ rows }, { status: 200 });
  }
  return NextResponse.json({ error: "404" }, { status: 500 });
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
