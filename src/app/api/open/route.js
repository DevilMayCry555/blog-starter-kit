import { NextResponse } from "next/server";
import { qs } from "@/lib/utils";
// import { fetchUsers } from "../../../lib/sql";

export async function GET(request) {
  const { search } = request.nextUrl;
  const { type } = qs(search);
  if (type === "user") {
    // const res = await fetchUsers(1, 999);
    const rows = Array(99)
      .fill("user")
      .map((it, idx) => {
        return {
          id: idx,
          username: `${it}-${idx + 1}`,
          birthday: new Date().toISOString(),
        };
      });
    return NextResponse.json({ rows }, { status: 200 });
  }
  return NextResponse.json({ error: "404" }, { status: 500 });
}
