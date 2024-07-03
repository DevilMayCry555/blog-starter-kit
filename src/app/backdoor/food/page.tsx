import { fetchFoods } from "@/lib/sql";
import Container from "../../_components/container";
import BaseTab from "@/app/_components/base-tab";

const types = [
  "其他",
  "肉类",
  "蔬菜",
  "水果",
  "豆类&pro",
  "奶类&pro",
  "米&pro",
  "面&pro",
];
export default async function Backdoor() {
  const { rows } = await fetchFoods();
  const group = types.map((name, type) => {
    return {
      title: name,
      content: rows
        .filter((it) => it.type === type)
        .map((item) => (
          <div>
            <span>{item.uid}</span>
            <span>{item.name}</span>
            <span>{item.calorie}</span>
          </div>
        )),
    };
  });
  return (
    <main className=" flex-1 relative">
      <Container>
        <BaseTab group={group} vertical={true} />
      </Container>
    </main>
  );
}
