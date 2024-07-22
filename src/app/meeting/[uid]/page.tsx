import { fetchChats, fetchRoom, fetchUser } from "@/lib/sql";

import "./style.css";
import AuthError from "./auth-error";
import Send from "./send";
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
  const { uid: userid, username } = userinfo ?? {
    uid: "",
    username: "bot",
  };
  const formData = {
    method: "create",
    userid,
    username,
    uid: roomid,
  };
  const { rows } = await fetchChats(roomid);
  return (
    <div className="chat-room">
      {userid && <Send formData={formData} />}

      <div className="chat-box">
        {rows.reverse().map((row, idx, ary) => {
          const { user_name, content, create_time } = row;
          return (
            <div key={idx} className="chat-message">
              <div className="user-name">{user_name}:</div>
              <div className="message-content">{content}</div>
              <div className="text-xs text-slate-400 flex justify-between">
                <span>{create_time}</span>
                <span>#{ary.length - idx} </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
