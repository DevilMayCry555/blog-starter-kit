import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { qs } from "@/lib/utils";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { method, ...rest } = qs(search);

  if (method === "create") {
    const { uid, name, type, calorie } = rest;
    await sql`INSERT INTO food (uid,name,type,calorie)
    VALUES (${uid},${name},${type},${calorie}});`;
  }
  return NextResponse.redirect(new URL("/backdoor/food", request.url));
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function OPTIONS(request) {}
