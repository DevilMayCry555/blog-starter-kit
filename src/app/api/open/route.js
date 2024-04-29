import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
import { fetchUsers } from "../../../lib/sql";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { type } = qs(search);
  if (type === "user") {
    const res = await fetchUsers(1, 999);
    return NextResponse.json(res, { status: 200 });
  }
  return NextResponse.json({ error: "404" }, { status: 500 });
}
