import { qstr } from "@/lib/utils";
import NewsList from "../_components/news-list";
import { ff } from "@/lib/api";

// const ff = (url: string) =>
//   fetch(url, { cache: "no-store" }).then((res) => res.json());

const getNews = (size: number) =>
  qstr("https://www.gcores.com/gapi/v1/articles", {
    "page[limit]": size,
    "page[offset]": 0,
    sort: "-published-at",
  });
const getRadios = (size: number) =>
  qstr("https://www.gcores.com/gapi/v1/categories/89/radios", {
    "page[limit]": size,
    "page[offset]": 0,
    sort: "-published-at",
  });
// 音频路径
const getPaths = (ids: string[]) =>
  Promise.all(
    ids.map((id) =>
      ff(`https://www.gcores.com/gapi/v1/radios/${id}?include=media`)
    )
  ).then((res) =>
    res.map((it) => {
      const [media] = it.included;
      const { audio } = { ...media.attributes } as any;
      return `https://alioss.gcores.com/uploads/audio/${audio}`;
    })
  );

export default async function Gcores() {
  const info = await ff(getNews(5));
  const radios = await ff(getRadios(3));
  const paths = await getPaths([].concat(radios.data).map((it: any) => it.id));
  // console.log(paths);
  return (
    <main className=" container flex-1 flex flex-col items-center overflow-hidden">
      <h4>NEWS</h4>
      <NewsList data={info.data} label="News" />
      <h4>RADIOS</h4>
      <NewsList data={radios.data} paths={paths} label="Radios" />
    </main>
  );
}
