import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "delete") {
    await sql`DELETE FROM dish WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { uid, name, type } = rest;
    await sql`INSERT INTO dish (uid,name,type)
    VALUES (${uid},${name},${type});`;
  }
  if (method === "add") {
    const { uid, foodid, g } = rest;
    await sql`INSERT INTO recipe (uid,foodid,g)
    VALUES (${uid},${foodid},${g});`;
    return NextResponse.redirect(new URL(`/cooking/${uid}`, request.url));
  }
  return NextResponse.redirect(new URL("/cooking", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
