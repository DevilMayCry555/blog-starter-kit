import { BASE_URL } from "@/lib/constants";
import Chat from "./gpt";

export default async function Demo() {
  await fetch(BASE_URL + "/api/open", {
    method: "POST",
    body: "chatgpt",
    cache: "no-store",
  });
  const { content } = await fetch(BASE_URL + "/api/stream").then((res) =>
    res.json()
  );
  const { remain_quota, used_quota } = content;
  const usage = 100 - (used_quota * 100) / (used_quota + remain_quota);

  return <Chat usage={usage} />;
}
// export default async function Demo() {
//   return <iframe src="https://gpt4o.so/zh-CN" className=" flex-1"></iframe>;
// }
