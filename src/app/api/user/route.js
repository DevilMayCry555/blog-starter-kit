import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (!method) {
    const data = await sql`SELECT * FROM users;`;
    return NextResponse.json(data, { status: 200 });
  }
  if (method === "delete") {
    await sql`DELETE FROM users WHERE uid = ${rest.uid};`;
  }
  if (method === "new") {
    await sql`INSERT INTO users (uid,username) VALUES (${getuuid()},${
      rest.username
    })`;
  }
  return NextResponse.redirect(new URL("/demo", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
