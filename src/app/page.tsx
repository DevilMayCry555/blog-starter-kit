import { fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import HomeList from "./_components/home-list";

export default async function Index() {
  // 未登录
  const userinfo = await fetchUser();
  if (!userinfo) {
    return notFound();
  }

  return <HomeList />;
}
