import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: Request) {
  const cookieStore = cookies();
  const user = cookieStore.get("auth");
  if (user) {
    return NextResponse.redirect(
      new URL(`/login?info${JSON.stringify(user)}`, request.url)
    );
  }
}

export const config = {
  matcher: "*",
};
