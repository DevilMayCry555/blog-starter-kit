import { fetchUser } from "@/lib/sql";
import DrawCanvas from "./draw-canvas";
import { notFound } from "next/navigation";

export default async function Draw() {
  // 未登录
  const userinfo = await fetchUser();
  const { draw, uid } = userinfo ?? {};
  return <DrawCanvas imgData={draw} userid={uid} />;
}
