import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { cookies } from "next/headers";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "delete") {
    await sql`DELETE FROM rooms WHERE uid = ${rest.uid};`;
  }
  if (method === "clear") {
    await sql`DELETE FROM chats WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { uid, password } = rest;
    await sql`INSERT INTO rooms (uid,password)
    VALUES (${uid},${password});`;
  }
  if (method === "draw") {
    const { uid, password } = rest;
    if (uid) {
      // 创建房间
      await sql`INSERT INTO rooms (uid,password)
      VALUES (${uid},${password});`;
      cookies().set({
        name: "draw-token",
        value: btoa(password),
        httpOnly: true,
        maxAge: 3 * 24 * 3600,
      });
    } else {
      // 进入房间
      const { rows } =
        await sql`SELECT * FROM rooms WHERE password = ${password}`;
      const [data] = rows;
      if (data) {
        cookies().set({
          name: "draw-token",
          value: btoa(password),
          httpOnly: true,
          maxAge: 3 * 24 * 3600,
        });
      }
    }
    return NextResponse.redirect(new URL("/draw", request.url));
  }
  return NextResponse.redirect(new URL("/backdoor/room", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
