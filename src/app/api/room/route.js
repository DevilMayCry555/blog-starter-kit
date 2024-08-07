import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "delete") {
    await sql`DELETE FROM rooms WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { uid, password, authcode } = rest;
    if (authcode === "221b") {
      await sql`INSERT INTO rooms (uid,password)
      VALUES (${uid},${password});`;
    }
    return NextResponse.redirect(new URL("/meeting", request.url));
  }

  return NextResponse.redirect(new URL("/backdoor/room", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
