import BaseCard from "./_components/base-card";
import BaseList from "./_components/base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ label, value }));

const Pages = transfer({
  "/posts": "他她",
  "/draw": "画板",
  "/guess": "竞猜",
  "/three": "3D",
  "/gcores": "Gcores",
});

const Tools = transfer({
  "/meeting": "贴吧",
  "/map": "天气",
  "/demo": "GPT",
  "/food": "卡路里",
  "/deep.apk": "Deep@2024.06",
});

const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
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
