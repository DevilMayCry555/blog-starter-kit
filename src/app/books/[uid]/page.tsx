import { load } from "cheerio";
import "./charts.css";

export default async function Books({ params }: Params) {
  const res = await fetch(
    `http://www.xianqihaotianmi.org/book/${params.uid}.html`,
    {
      cache: "no-store",
    }
  ).then((r) => r.text());
  const $ = load(res);
  const parts = $("ul.list-charts").html() ?? "";
  //   console.log(parts);
  return (
    <main className=" flex-1">
      <div
        className="book-charts"
        dangerouslySetInnerHTML={{ __html: parts }}
      ></div>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
