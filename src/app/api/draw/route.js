import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getuuid, qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (method === "draft") {
    const { userid, canvas } = rest;
    await sql`UPDATE users SET
    draw = ${canvas}
    WHERE uid = ${userid};`;
  }
  if (method === "publish") {
    const { userid, title, canvas } = rest;
    await sql`INSERT INTO arts (uid,user_id,title,content)
    VALUES (${getuuid()},${userid},${title},${canvas});`;
    return NextResponse.redirect(new URL("/guess", request.url));
  }
  if (method === "finish") {
    const { uid, answer, ...guess } = rest;
    await sql`UPDATE arts SET
    answer = ${answer}
    WHERE uid = ${uid};`;
    Object.keys(guess).forEach(async (userid) => {
      await sql`UPDATE arts SET
      answer = ${answer}
      WHERE uid = ${uid} AND user_id = ${userid};`;
    });
    return NextResponse.redirect(new URL("/guess/" + uid, request.url));
  }
  return NextResponse.redirect(new URL("/draw", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
