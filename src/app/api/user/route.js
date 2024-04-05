import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";
import { format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (!method) {
    const auth = request.cookies._headers.get("role-token");
    // console.log(auth);
    if (!auth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const { current, pageSize } = rest;
    const offset = (current - 1) * pageSize;
    const { rows, fields } = await sql`SELECT * FROM users;`;
    const data = {
      fields,
      rows: rows.slice(offset, offset + pageSize),
      total: rows.length,
    };
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "delete") {
    await sql`DELETE FROM users WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { username, admin } = rest;
    const intro = JSON.stringify({
      admin: !!admin,
    });
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`INSERT INTO users (uid,username,create_time,intro)
    VALUES (${getuuid()},${username},${time},${intro});`;
  }
  if (method === "update") {
    const { uid, birthday } = rest;
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`UPDATE users SET
    update_time = ${time},
    birthday = ${birthday}
    WHERE uid = ${uid};`;
  }
  if (method === "admin") {
    const { uid } = rest;
    const { rows } = await sql`SELECT * FROM users WHERE uid = ${uid};`;
    const { admin } = JSON.parse(rows[0].intro ?? "{}");
    const intro = JSON.stringify({
      admin: !admin,
    });
    await sql`UPDATE users SET
    intro = ${intro}
    WHERE uid = ${uid};`;
  }
  return NextResponse.redirect(new URL("/backdoor/user", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
