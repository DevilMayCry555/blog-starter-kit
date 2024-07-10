import { ff } from "@/lib/api";
import BaseRadioPlayer from "../_components/base-radio-player";
import BaseList from "../_components/base-list";

const fields: { [k: string]: string } = {
  855833: "鬼灭之刃：柱训练篇&2&f8dcd522fdd6f6eeb1fe9a7f52915667",
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
    videoId: id,
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
    <main>
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
