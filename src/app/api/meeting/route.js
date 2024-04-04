import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { format } from "date-fns";
const create = (data) => {
  const { uid, userid, username, content } = data;
  const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  return sql`INSERT INTO chats (uid,user_id,user_name,content,create_time)
    VALUES (${uid},${userid},${username},${content},${time});`;
};
export async function GET(request) {
  const auth = request.cookies._headers.get("role-token");
  // console.log(auth);
  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (!method) {
    const { uid } = rest;
    const { rows } = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    if (rows.length === 0) {
      await create({
        uid,
        userid: "anonymous",
        username: "Robot",
        content: "hello,world",
      });
    }
    const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "delete") {
    await sql`DELETE FROM chats WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    await create({ ...rest });
  }
  if (method === "update") {
    const { uid, birthday } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`UPDATE chats SET
    update_time = ${time},
    birthday = ${birthday}
    WHERE uid = ${uid};`;
  }
  if (method === "admin") {
    const { uid } = rest;
    const { rows } = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    const { admin } = JSON.parse(rows[0].intro ?? "{}");
    const intro = JSON.stringify({
      admin: !admin,
    });
    await sql`UPDATE chats SET
    intro = ${intro}
    WHERE uid = ${uid};`;
  }
  return NextResponse.redirect(new URL("/meeting", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
