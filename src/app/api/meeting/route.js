import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, uid, ...rest } = qs(search);
  if (!method) {
    const { rows } = await sql`SELECT * FROM rooms WHERE uid = ${uid};`;
    if (rows.length === 0) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "create") {
    const { userid, username, content } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`INSERT INTO chats (uid,user_id,user_name,content,create_time)
    VALUES (${uid},${userid},${username},${content},${time});`;
  }
  // return NextResponse.redirect(new URL("/meeting/" + uid, request.url));
  return NextResponse.json({ data: true }, { status: 200 });
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
