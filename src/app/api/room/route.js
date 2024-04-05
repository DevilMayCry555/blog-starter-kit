import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";

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
    const { rows, fields } = await sql`SELECT * FROM rooms;`;
    const data = {
      fields,
      rows: rows.slice(offset, offset + pageSize),
      total: rows.length,
    };
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "delete") {
    await sql`DELETE FROM rooms WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { uid, password } = rest;
    await sql`INSERT INTO rooms (uid,password)
    VALUES (${uid},${password});`;
  }
  return NextResponse.redirect(new URL("/backdoor/room", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
