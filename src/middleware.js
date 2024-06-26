import { NextResponse } from "next/server";
import { fetchUser } from "./lib/sql";
export async function middleware(request) {
  // 所有api 除了登录
  const { pathname } = request.nextUrl;
  console.log(pathname);
  if (pathname === "/posts") {
    return;
  }
  const info = await fetchUser();
  if (!info) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { admin } = info;
  if (!Number(admin)) {
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

export const config = {
  matcher: [
    "/posts/:slug*",
    "/backdoor/:door*",
    // "/api/:api*"
  ],
};
