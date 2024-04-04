import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const isDev = process.env.NODE_ENV === "development";
export function middleware(request) {
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { pathname } = request.nextUrl;
  // 控制台 仅管理员可见
  if (pathname === "/backdoor" && !isDev) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/backdoor", "/api/user"],
};
