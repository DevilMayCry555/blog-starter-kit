import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const access = cookies().get("auth-token");
  // console.log("access", access);
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*"],
};
