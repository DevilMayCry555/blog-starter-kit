import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";
//
const fields: { [k: string]: string } = {
  r855833: "鬼灭之刃：柱训练篇&2&f8dcd522fdd6f6eeb1fe9a7f52915667",
  r387916: "加菲猫2004&1&2c1fe5c78f7737223c9a71443c4dd24d",
  r411885: "加菲猫2006&1&28c1965251a6fd7eee5868706e6aa951",
  r746742: "加菲猫的幸福生活S1&18&3c8d8682c5918a4bd978026de6a3eefa",
  r746741: "加菲猫的幸福生活S2&18&30fc0a7f06b29a19e125b861e4bf500a",
  r746743: "加菲猫的幸福生活S3&18&249983ee58c172e36d9065320cdf5ffb",
  r746737: "加菲猫的幸福生活S4&18&d0202ab4cf0e9b8edae05942b539c467",
  r661589: "明星大侦探S3&19&d88c4f5204ad3aa9cf43641283ac8dd7",
  r591360: "明星大侦探S4&19&14cf892ea66018125f719027f4aa9179",
  r421162: "甄嬛传&2&a49abcd6d66c6479aef6e98cdfdfdbc7",
  r587092: "知否&2&bc16f57d183f499a73dbae85c0354ccd",
  r381931: "请回答1988&2&3924fd46af8f266d182f89805910f65c",
};
// xg-video-container video
export default async function Watch({ searchParams }: any) {
  const { id } = searchParams;
  const q = await fetch(
    "https://www.douyin.com/video/7389592603093716251"
  ).then((res) => res.text());
  if (q) {
    console.log(q);
  }
  if (!id) {
    const list = Object.keys(fields).map((it) => {
      const [value] = fields[it].split("&");
      return { label: `/watch?id=${it}`, value };
    });
    return (
      <main className=" flex-1">
        <div className=" text-center">list</div>
        <BaseList list={list} />
      </main>
    );
  }
  const [name, mtype, token] = fields[id].split("&");
  const res = await ff("https://v.aikanbot.com/api/getResN", {
    videoId: id.replace("r", ""),
    mtype,
    token,
  });
  //   console.log(res.data);
  const list: { id: number; resData: string }[] = res.data.list;
  const group = list.map((it) => {
    const [{ url }] = JSON.parse(it.resData);
    return `${url}`.split("#").filter((it) => !!it);
  });
  return (
    <main className=" flex-1 p-4">
      <h1 className=" text-3xl font-bold tracking-tighter leading-tight">
        {name}
      </h1>
      {group.map((g, idx) => (
        <div key={idx}>
          <div>线路{idx + 1}</div>
          {g.map((v) => {
            const [lab, url] = `${v}`.split("$");
            return <BaseRadioPlayer key={url} action={lab} url={url} />;
          })}
        </div>
      ))}
    </main>
  );
}
