import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";
import { parseISO, format } from "date-fns";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (!method) {
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
  if (method === "new") {
    const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    await sql`INSERT INTO users (uid,username,create_time)
    VALUES (${getuuid()},${rest.username},${time});`;
  }
  return NextResponse.redirect(new URL("/demo", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
