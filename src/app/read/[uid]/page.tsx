import { load } from "cheerio";

export default async function Read({ params }: Params) {
  const res = await fetch(`http://www.xianqihaotianmi.org/read/${params.uid}`, {
    cache: "no-store",
  }).then((r) => r.text());
  const $ = load(res);
  const head = $(".panel .panel-heading").text();
  const parts = $(".content-body").html() ?? "";
  const prev = $(".pager .previous").html() ?? "";
  const next = $(".pager .next").html() ?? "";
  //   console.log(parts);
  return (
    <main className=" flex-1">
      <div className=" text-center text-large font-bold">{head}</div>
      <div className=" px-4" dangerouslySetInnerHTML={{ __html: parts }}></div>
      <div className=" flex justify-around py-4">
        <div dangerouslySetInnerHTML={{ __html: prev }}></div>
        <div dangerouslySetInnerHTML={{ __html: next }}></div>
      </div>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
