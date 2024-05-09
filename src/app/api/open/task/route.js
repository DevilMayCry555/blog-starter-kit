import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { sql } from "@vercel/postgres";

export async function GET(request) {
  if (false) {
    return NextResponse.json({ error: "404" }, { status: 500 });
  }
  const { search } = request.nextUrl;
  const { type } = qs(search);
  const { rows } = await sql`SELECT * FROM tasks WHERE type = ${type};`;
  return NextResponse.json({ rows }, { status: 200 });
}
