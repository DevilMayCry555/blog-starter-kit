import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// const isDev = process.env.NODE_ENV === "development";
export function middleware(request) {
  const access = cookies().get("auth-token");
  // console.log("access", access);
  // 未登录
  if (!access) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { pathname } = request.nextUrl;
  const [uid, name] = JSON.parse(atob(access.value));
  // 控制台 仅管理员可见
  if (pathname === "/backdoor" && name !== "admin") {
    console.log(uid, name);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/posts/:slug*", "/backdoor"],
};
