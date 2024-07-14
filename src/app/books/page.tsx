import { load } from "cheerio";

export default async function Books() {
  const res = await fetch("http://www.xianqihaotianmi.org/", {
    cache: "no-store",
  }).then((r) => r.text());
  console.log(res);
  // const res1 = load('https://www.quanben.io')
  // console.log(res1)
  return res;
}
