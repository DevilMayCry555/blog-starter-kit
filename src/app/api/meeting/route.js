import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, uid, ...rest } = qs(search);
  if (!method) {
    const auth = request.cookies._headers.get("role-token");
    if (!auth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "delete") {
    await sql`DELETE FROM chats WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { userid, username, content } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`INSERT INTO chats (uid,user_id,user_name,content,create_time)
    VALUES (${uid},${userid},${username},${content},${time});`;
  }
  if (method === "update") {
    const { birthday } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`UPDATE chats SET
    update_time = ${time},
    birthday = ${birthday}
    WHERE uid = ${uid};`;
  }
  if (method === "admin") {
    const { rows } = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    const { admin } = JSON.parse(rows[0].intro ?? "{}");
    const intro = JSON.stringify({
      admin: !admin,
    });
    await sql`UPDATE chats SET
    intro = ${intro}
    WHERE uid = ${uid};`;
  }
  return NextResponse.redirect(new URL("/meeting/" + uid, request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
