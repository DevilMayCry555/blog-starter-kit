import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";

const fields: { [k: string]: string } = {
  r855833: "鬼灭之刃：柱训练篇&2&f8dcd522fdd6f6eeb1fe9a7f52915667",
  r387916: "加菲猫2004&1&2c1fe5c78f7737223c9a71443c4dd24d",
  r411885: "加菲猫2006&1&28c1965251a6fd7eee5868706e6aa951",
  r746742: "加菲猫的幸福生活S1&18&3c8d8682c5918a4bd978026de6a3eefa",
  r746741: "加菲猫的幸福生活S2&18&30fc0a7f06b29a19e125b861e4bf500a",
  r746743: "加菲猫的幸福生活S3&18&249983ee58c172e36d9065320cdf5ffb",
  r746737: "加菲猫的幸福生活S4&18&d0202ab4cf0e9b8edae05942b539c467",
};

export default async function Watch({ searchParams }: any) {
  const { id } = searchParams;

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
  const group = list.slice(0, 1).map((it) => {
    const [{ url }] = JSON.parse(it.resData);
    return `${url}`.split("#").filter((it) => !!it);
  });
  return (
    <main className=" flex-1">
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
