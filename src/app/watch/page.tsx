import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";

//
export default async function Watch({ searchParams }: any) {
  const { id } = searchParams;
  if (!id) {
    const list = fields.map((it) => {
      return { label: `/watch?id=${it.code}`, value: it.name };
    });
    return (
      <main className=" flex-1">
        <div className=" text-center">list</div>
        <BaseList list={list} />
      </main>
    );
  }
  const info = fields.find((it) => it.code === id);
  if (!info) {
    return 404;
  }
  const { token, type, code, name } = info;
  const res = await ff("https://v.aikanbot.com/api/getResN", {
    videoId: code,
    mtype: type,
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
//
const fields = [
  {
    code: 855833,
    name: "鬼灭之刃：柱训练篇",
    type: 2,
    token: "f8dcd522fdd6f6eeb1fe9a7f52915667",
  },
  {
    code: 387916,
    name: "加菲猫 2004",
    type: 1,
    token: "2c1fe5c78f7737223c9a71443c4dd24d",
  },
  {
    code: 411885,
    name: "加菲猫 2006",
    type: 1,
    token: "28c1965251a6fd7eee5868706e6aa951",
  },
  {
    code: 746742,
    name: "加菲猫的幸福生活 S1",
    type: 18,
    token: "3c8d8682c5918a4bd978026de6a3eefa",
  },
  {
    code: 746741,
    name: "加菲猫的幸福生活 S2",
    type: 18,
    token: "30fc0a7f06b29a19e125b861e4bf500a",
  },
  {
    code: 746743,
    name: "加菲猫的幸福生活 S3",
    type: 18,
    token: "249983ee58c172e36d9065320cdf5ffb",
  },
  {
    code: 746737,
    name: "加菲猫的幸福生活 S4",
    type: 18,
    token: "d0202ab4cf0e9b8edae05942b539c467",
  },
  {
    code: 661589,
    name: "明星大侦探 S3",
    type: 19,
    token: "d88c4f5204ad3aa9cf43641283ac8dd7",
  },
  {
    code: 591360,
    name: "明星大侦探 S4",
    type: 19,
    token: "14cf892ea66018125f719027f4aa9179",
  },
  {
    code: 421162,
    name: "甄嬛传",
    type: 2,
    token: "a49abcd6d66c6479aef6e98cdfdfdbc7",
  },
  {
    code: 587092,
    name: "知否知否",
    type: 2,
    token: "bc16f57d183f499a73dbae85c0354ccd",
  },
  {
    code: 381931,
    name: "请回答1988",
    type: 2,
    token: "3924fd46af8f266d182f89805910f65c",
  },
];
