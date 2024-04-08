import Container from "@/app/_components/container";
import { fetchSelf } from "@/lib/sql";
import { notFound } from "next/navigation";

export default async function User({ params }: Params) {
  const uid = decodeURIComponent(params.uid);
  const info = await fetchSelf(atob(uid));
  if (!info) {
    return notFound();
  }
  const { username, birthday, admin } = info;
  return (
    <main>
      <Container>
        <div>个人中心</div>
        <div>昵称：{username}</div>
        <div>生日：{birthday}</div>
        <div>管理员权限：{Number(admin) ? "开" : "关"}</div>
      </Container>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
