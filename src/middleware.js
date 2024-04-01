import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { pathname } = request.nextUrl;
  // 控制台 仅管理员可见
  if (pathname === "/demo" && access.value !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/demo"],
};
