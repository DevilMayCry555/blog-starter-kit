import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { PWD, encrypt } from "@/lib/constants";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { pwd } = qs(search);
  // 特定密钥
  if (pwd === PWD) {
    cookies().set({
      name: "auth-token",
      value: encrypt([pwd, "admin"]),
      httpOnly: true,
      maxAge: 7 * 24 * 3600,
    });
    return NextResponse.redirect(new URL("/", request.url));
  }
  const { rows } = await sql`SELECT * FROM users;`;
  const find = rows.find((it) => it.uid === pwd);
  if (find) {
    cookies().set({
      name: "auth-token",
      value: encrypt([pwd, find.username]),
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
