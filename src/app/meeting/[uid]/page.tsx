import { fetchRoom, fetchUser } from "@/lib/sql";

import AuthError from "./auth-error";
import RtChat from "./rt-chat";

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
  return <RtChat username={username} hardcore={roomid} />;
}
type Params = {
  params: {
    uid: string;
  };
};
