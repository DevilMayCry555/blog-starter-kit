import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PWD } from "./lib/constants";
// const isDev = process.env.NODE_ENV === "development";
export function middleware(request) {
  // 所有api 除了登录
  const { pathname } = request.nextUrl;
  if (["/api/login", "/api/logout"].includes(pathname)) {
    return;
  }
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // 仅管理员
  if (access.value !== PWD) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/backdoor/:door*", "/api/:api*"],
};
