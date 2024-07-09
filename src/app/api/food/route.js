import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "delete") {
    await sql`DELETE FROM food WHERE uid = ${rest.uid};`;
  }
  if (method === "create") {
    const { uid, name, type, calorie, intro } = rest;
    await sql`INSERT INTO food (uid,name,type,calorie,intro)
    VALUES (${uid},${name},${type},${calorie},${intro});`;
  }
  if (method === "update") {
    const { uid, calorie, intro } = rest;
    await sql`UPDATE food SET
    calorie = ${calorie},
    intro = ${intro}
    WHERE uid = ${uid};`;
  }
  return NextResponse.redirect(new URL("/eat", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
