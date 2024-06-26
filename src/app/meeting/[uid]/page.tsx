import { notFound } from "next/navigation";
import { fetchChats, fetchRoom, fetchUser } from "@/lib/sql";

import "./style.css";
import AuthError from "./auth-error";
import Send from "./send";
// const Send = ({ formData }: { formData: { [k: string]: any } }) => {
//   return (
//     <form action="/api/meeting" method="GET" encType="text/plain">
//       {Object.entries({ ...formData }).map((it) => {
//         const [key, val] = it;
//         return (
//           <input key={key} type="text" name={key} defaultValue={val} hidden />
//         );
//       })}
//       <div className="input-box">
//         <input type="text" name="content" required placeholder="不超过20字" />
//         <button type="submit">发送</button>
//       </div>
//     </form>
//   );
// };
export default async function Meeting({ params, searchParams }: Params) {
  // 未登录
  const userinfo = await fetchUser();
  if (!userinfo) {
    return notFound();
  }
  const { uid: userid, username } = userinfo;
  const formData = {
    method: "create",
    userid,
    username,
    uid: params.uid,
  };
  const roomid = decodeURIComponent(params.uid);
  const { k } = searchParams;
  const room = await fetchRoom(roomid, k);
  if (room.rows.length === 0) {
    return <AuthError uid={roomid} />;
  }
  const { rows } = await fetchChats(roomid);
  return (
    <div className="chat-room">
      <Send formData={formData} />

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
  searchParams: any;
};
