import { fetchRoom, fetchUser } from "@/lib/sql";

import "./style.css";
import AuthError from "./auth-error";
import BaseRtc from "@/app/_components/base-rtc";

export default async function Page({ params }: Params) {
  const roomid = decodeURIComponent(params.uid);
  const {
    rows: [room],
  } = await fetchRoom(roomid);
  if (!room) {
    return <AuthError uid={roomid} />;
  }
  // 未登录
  const userinfo = await fetchUser();
  // if (!userinfo) {
  //   return notFound();
  // }
  const { username } = userinfo ?? {
    username: "anonymous",
  };
  return (
    <div className="chat-room">
      <BaseRtc type="chat" username={username} hardcore={roomid} />
    </div>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
