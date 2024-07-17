import { load } from "cheerio";
import "./index.css";

export default async function Download({ searchParams }: any) {
  const { src = "" } = searchParams;
  const res = await fetch(`https://leif0419.github.io/m3u8`, {
    cache: "no-store",
  }).then((r) => r.text());
  const $ = load(res);
  const parts = $.html() ?? "";
  //   console.log(parts);
  return (
    <main className=" flex-1">
      <div className=" p-2 break-all">{atob(src)}</div>
      <div
        className="m3u8-get"
        dangerouslySetInnerHTML={{ __html: parts }}
      ></div>
    </main>
  );
}
