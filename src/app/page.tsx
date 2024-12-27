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
  "/demo": "GPT",
  "/gcores": "Gcores",
  "/mathviewer": "Formula",
});

interface Newinfo {
  mid: string;
  category: string;
  word: string;
  ad_type: string;
}

export default async function Index() {
  // console.log(paths);
  const { data } = await ff("https://weibo.com/ajax/side/hotSearch");
  const { realtime } = data as { realtime: Newinfo[] };
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
      <div className=" fixed bottom-4 right-4">
        <BaseModal action="HOT" title="HOT">
          {realtime.map((it, idx) => (
            <div className=" my-2 flex justify-between" key={idx}>
              <span className=" w-20">{it.category ?? it.ad_type}</span>
              <span className=" flex-1">{it.word}</span>
            </div>
          ))}
        </BaseModal>
      </div>
    </main>
  );
}
