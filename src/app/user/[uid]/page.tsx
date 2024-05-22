import Container from "@/app/_components/container";
import { fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import UserArts from "@/app/_components/user-arts";

export default async function User({ params }: Params) {
  const uid = decodeURIComponent(params.uid);
  const info = await fetchUser(atob(uid), { art: true });
  if (!info) {
    return notFound();
  }
  const { username, birthday, admin, arts } = info;
  return (
    <main>
      <Container>
        <div className=" text-2xl pt-4">基本信息</div>
        <div>昵称：{username}</div>
        <div>生日：{birthday}</div>
        <div>管理员权限：{Number(admin) ? "开" : "关"}</div>
        <div className=" text-blue-500">
          {Number(admin) ? (
            <>
              <a href="/backdoor/user">用户</a>
              <span className=" opacity-0">gap</span>
              <a href="/backdoor/room">会议</a>
              <span className=" opacity-0">gap</span>
              <a href="/backdoor/location">足迹</a>
              <span className=" opacity-0">gap</span>
              <a href="/map#/117.0186/36.6752">flutter map</a>
            </>
          ) : null}
          <div>
            <a href="/api/logout">退出登录</a>
          </div>
        </div>

        <div className=" text-2xl pt-4">你画我猜</div>
        <UserArts listData={arts} />
      </Container>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
