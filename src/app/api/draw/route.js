import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getuuid, qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  // if (method === "draft") {
  //   const { userid, canvas } = rest;
  //   await sql`UPDATE users SET
  //   draw = ${canvas}
  //   WHERE uid = ${userid};`;
  // }
  // if (method === "publish") {
  //   const { userid, title, canvas } = rest;
  //   await sql`INSERT INTO arts (uid,user_id,title,content)
  //   VALUES (${getuuid()},${userid},${title},${canvas});`;
  //   return NextResponse.redirect(new URL("/guess", request.url));
  // }
  if (method === "finish") {
    const { uid, answer, ...guess } = rest;
    await sql`UPDATE arts SET
    answer = ${answer}
    WHERE uid = ${uid};`;
    // console.log("guess", guess);
    Object.keys(guess).forEach(async (userid) => {
      await sql`UPDATE guess SET
      win = ${1}
      WHERE uid = ${uid} AND user_id = ${decodeURIComponent(userid)};`;
    });
    return NextResponse.redirect(new URL("/guess/" + uid, request.url));
  }
  if (method === "guess") {
    const { uid, userid, content } = rest;
    await sql`INSERT INTO guess (uid,user_id,content)
    VALUES (${uid},${userid},${content});`;
    return NextResponse.redirect(new URL("/guess", request.url));
  }
  return NextResponse.redirect(new URL("/draw", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {
  const { value } = await request.body.getReader().read();
  const { method, ...rest } = JSON.parse(new TextDecoder().decode(value));
  if (method === "draft") {
    const { userid, canvas } = rest;
    await sql`UPDATE users SET
    draw = ${canvas}
    WHERE uid = ${userid};`;
    return NextResponse.json(
      {
        data: true,
      },
      { status: 200 }
    );
  }
  if (method === "publish") {
    const { userid, title, canvas } = rest;
    await sql`INSERT INTO arts (uid,user_id,title,content)
    VALUES (${getuuid()},${userid},${title},${canvas});`;
  }
  return NextResponse.json(
    {
      data: true,
    },
    { status: 200 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
