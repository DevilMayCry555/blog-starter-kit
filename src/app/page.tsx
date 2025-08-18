import { ff } from "@/lib/api";
import BaseCard from "./_components/base-card";
import BaseList from "./_components/base-list";
import BaseModal from "./_components/base-modal";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ label, value }));

const Pages = transfer({
  "/posts": "他她",
  "/meeting": "实时",
  "/draw": "烩绘",
  "/guess": "话画",
  "/eat": "贩饭",
});

const Tools = transfer({
  "/three": "3D",
  "/map": "天气",
  "/gcores": "机核",
  "/mathviewer": "公式",
  "/watch": "看剧",
});

interface Newinfo {
  mid: string;
  word: string;
  icon: string;
  icon_width: string;
  icon_height: string;
}

export default async function Index() {
  // console.log(paths);
  // const { data, ...rest } = await ff("https://weibo.com/ajax/side/hotSearch");
  // const { realtime } = data as { realtime: Newinfo[] };
  return (
    <main className=" m-auto w-4/5 flex flex-col lg:flex-row">
      {transfer({
        Pages,
        Tools,
      }).map((it, idx) => (
        <BaseCard title={it.label} key={idx}>
          <BaseList list={it.value} />
        </BaseCard>
      ))}
    </main>
  );
}
