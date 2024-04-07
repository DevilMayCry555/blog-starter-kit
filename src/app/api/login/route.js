import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { encrypt } from "@/lib/constants";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { pwd } = qs(search);
  const password = btoa(pwd);
  const { rows } = await sql`SELECT * FROM users;`;
  const find = rows.find((it) => it.uid === password);
  if (find) {
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`UPDATE users SET
    update_time = ${time}
    WHERE uid = ${password};`;
    cookies().set({
      name: "auth-token",
      value: encrypt([password, find.username]),
      httpOnly: true,
      maxAge: 7 * 24 * 3600,
    });
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
