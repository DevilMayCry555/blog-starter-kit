import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { pwd, method, ...rest } = qs(search);
  // yami
  if (method === "yami") {
    const { account, password, imgCode } = rest;
    const { token } = await fetch(
      "https://apiw5.xn--pssa1886a.com/vw3/login?platform=pwa&version=1.0.0",
      {
        method: "POST",
        body: JSON.stringify({ account, password, imgCode }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    ).then((r) => r.json());
    console.log(token);
    cookies().set({
      name: "yami-token",
      value: token,
      httpOnly: true,
      maxAge: 12 * 3600,
    });
    return NextResponse.redirect(new URL("/yami", request.url));
  }
  const password = btoa(pwd);
  const { rows } = await sql`SELECT * FROM users WHERE uid = ${password};`;
  if (rows.length) {
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`UPDATE users SET
    update_time = ${time}
    WHERE uid = ${password};`;
    cookies().set({
      name: "auth-token",
      value: password,
      httpOnly: true,
      maxAge: 24 * 3600,
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
