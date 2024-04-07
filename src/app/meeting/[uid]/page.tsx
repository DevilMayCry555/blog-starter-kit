import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import "./style.css";
// import { WSClient } from "@/app/_components/ws-client";
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
//         <input type="text" name="content" placeholder="请输入消息..." />
//         <button type="submit">发送</button>
//       </div>
//     </form>
//   );
// };
import Preview from "./preview";
export default async function Meeting({ params }: Params) {
  const token = cookies().get("auth-token");

  if (!token) {
    return notFound();
  }
  const [userid, username] = JSON.parse(atob(token.value));
  const formData = {
    method: "create",
    userid,
    username,
    uid: params.uid,
  };
  return (
    <main>
      <div className="chat-room min-h-screen">
        <Preview formData={formData} token={token.value} />
      </div>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
