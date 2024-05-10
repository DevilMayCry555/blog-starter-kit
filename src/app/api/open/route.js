import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { sql } from "@vercel/postgres";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { route, ...rest } = qs(search);
  if (route === "task") {
    const { type, identity } = rest;
    const { rows } =
      await sql`SELECT * FROM tasks WHERE user_id = ${identity} AND type = ${type};`;
    return NextResponse.json({ rows }, { status: 200 });
  }
  return NextResponse.json({ error: "404" }, { status: 500 });
}
