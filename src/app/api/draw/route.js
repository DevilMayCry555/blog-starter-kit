import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (method === "draft") {
    const { userid, canvas } = rest;
    await sql`UPDATE users SET
    draw = ${canvas}
    WHERE uid = ${userid};`;
    return NextResponse.redirect(new URL("/draw", request.url));
  }
  if (method === "create") {
    const { uid, userid, username, content } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`INSERT INTO chats (uid,user_id,user_name,content,create_time)
    VALUES (${uid},${userid},${username},${content},${time});`;
  }
  return NextResponse.redirect(new URL("/meeting/" + uid, request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
