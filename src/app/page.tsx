import BaseCard from "./_components/base-card";
import BaseList from "./_components/base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ label, value }));

const Pages = transfer({
  "/posts": "他她",
  "/meeting": "贴吧",
  "/draw": "画板",
  "/guess": "竞猜",
  "/gcores": "Gcores",
});

const Tools = transfer({
  "/three": "3D",
  "/map": "天气",
  "/demo": "GPT",
  "/eat": "烹饪",
  "/charts": "图表",
});

const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
  "/backdoor/location": "usage",
});

export default async function Index() {
  // console.log(paths);
  return (
    <main className=" m-auto w-4/5 flex flex-col lg:flex-row">
      {transfer({
        Pages,
        Tools,
        Control,
      }).map((it, idx) => (
        <BaseCard title={it.label} key={idx}>
          <BaseList list={it.value} />
        </BaseCard>
      ))}
    </main>
  );
}
