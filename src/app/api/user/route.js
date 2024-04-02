import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs, getuuid } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);
  if (method === "delete") {
    await sql`DELETE FROM users WHERE uid = ${rest.uid};`;
  }
  return NextResponse.redirect(new URL("/demo", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {
  const body = await request.text();
  const data = qs(body);
  if (data) {
    await sql`INSERT INTO users (uid,username) VALUES (${getuuid()},${
      data.username
    })`;
  }
  return NextResponse.redirect(new URL("/demo", request.url));
}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
