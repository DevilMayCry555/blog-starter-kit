import { fetchFoods } from "@/lib/sql";
import BaseTab from "@/app/_components/base-tab";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";
import Container from "../_components/container";
import { isDEV } from "@/lib/constants";

const types = ["烹", "炒", "煎", "炸", "蒸", "煮", "炖"];

export default async function Eat() {
  const { rows } = await fetchFoods();
  // console.log(rows);
  const deleteProps = (uid: string) => ({
    action: "/api/food",
    method: "delete",
    text: "del",
    form: { uid },
    columns: [],
  });
  const group = types.map((name, type) => {
    return {
      title: name,
      content: rows
        .filter((it) => +it.type === type)
        .sort((a, b) => +b.calorie - +a.calorie)
        .map((item, idx) => (
          <div className=" mb-2 border-b-1">
            {idx === 0 && (
              <div className=" flex justify-between">
                <span className=" w-16">uid</span>
                <span className=" flex-1">name</span>
                <span>kcal</span>
                {isDEV && <span className=" w-20 text-right">action</span>}
              </div>
            )}
            <div className=" flex justify-between">
              <span className=" w-16">{item.uid}</span>
              <span className=" flex-1">{item.name}</span>
              <span>{item.calorie}</span>
              {isDEV && (
                <span className=" w-20 text-right">
                  <BaseForm {...deleteProps(item.uid)} size="sm" />
                </span>
              )}
            </div>
          </div>
        )),
    };
  });
  const createProps = {
    action: "/api/food",
    method: "create",
    form: { uid: Date.now() % 10000 },
    columns: [
      {
        field: "name",
        label: "name",
        type: "input",
      },
      {
        field: "type",
        label: "type",
        type: "select",
        options: types.map((label, value) => ({ label, value })),
      },
      {
        field: "calorie",
        label: "kcal",
        type: "number",
      },
    ],
  };
  return (
    <main className=" flex-1 relative">
      <Container>
        {isDEV ? (
          <div className=" my-4">
            <BaseModal action="create" title="create food" dismiss={false}>
              <BaseForm {...createProps} />
            </BaseModal>
          </div>
        ) : (
          <div className=" h-4"></div>
        )}

        <BaseTab group={group} vertical={true} defaultKey="0" />
      </Container>
    </main>
  );
}
