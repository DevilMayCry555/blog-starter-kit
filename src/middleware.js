import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchUser } from "./lib/sql";
const admin_routes = ["/posts", "/backdoor"];
const open_routes = ["/api/login", "/api/logout", "/api/stream", "/api/open"];
export async function middleware(request) {
  // 所有api 除了登录
  const { pathname } = request.nextUrl;
  if (open_routes.includes(pathname)) {
    return;
  }
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const info = await fetchUser(access.value);
  if (!info) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // 仅管理员可见 admin 0 or 1
  const { admin } = info;
  if (admin_routes.some((it) => pathname.includes(it)) && !Number(admin)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/posts/:slug*",
    "/backdoor/:door*",
    "/api/:api*",
    // "/meeting/:uid*",
    // "/guess/:uid*",
  ],
};
