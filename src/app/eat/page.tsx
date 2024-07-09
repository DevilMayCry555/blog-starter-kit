import { fetchFoods } from "@/lib/sql";
import BaseTab from "@/app/_components/base-tab";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";
import Container from "../_components/container";
import { isDEV } from "@/lib/constants";
import BaseCard from "../_components/base-card";

const types = ["烹", "炒", "煎", "炸", "蒸", "煮", "炖"];

export default async function Eat() {
  const { rows } = await fetchFoods();
  // console.log(rows);
  const deleteProps = (uid: string) => ({
    action: "/api/food",
    method: "delete",
    text: "delete",
    form: { uid },
    columns: [],
  });
  const updateProps = (info: any) => ({
    action: "/api/food",
    method: "update",
    text: "update",
    form: { uid: info.uid },
    columns: [
      {
        field: "calorie",
        label: "kcal",
        type: "number",
        init: +info.calorie,
      },
      {
        field: "intro",
        label: "intro",
        type: "textarea",
        init: info.intro,
      },
    ],
  });
  const group = types.map((name, type) => {
    return {
      title: name,
      content: rows
        .filter((it) => +it.type === type)
        .map((item, idx) => (
          <BaseCard
            title={
              <>
                <span className=" w-14">{item.uid}</span>
                <span className=" flex-1">{item.name}</span>
                <span>{item.calorie} kcal</span>
              </>
            }
            key={idx}
          >
            <div>{item.intro}</div>
            <div className=" flex justify-end">
              <BaseModal action="update" title="" dismiss={false}>
                <BaseForm {...updateProps(item)} />
              </BaseModal>
              {isDEV && <BaseForm {...deleteProps(item.uid)} />}
            </div>
          </BaseCard>
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
      {
        field: "intro",
        label: "intro",
        type: "textarea",
      },
    ],
  };
  return (
    <main className=" flex-1 relative">
      <Container>
        <div className=" text-sm">
          <div>葱末10g、蒜片10g、姜末5g，约25kcal</div>
          <div>花生油30g，约270kcal</div>
          <div>以上不参与计算</div>
        </div>
        <div className=" my-4">
          <BaseModal action="create" title="create food" dismiss={false}>
            <BaseForm {...createProps} />
          </BaseModal>
        </div>

        <BaseTab group={group} vertical={true} defaultKey="0" />
      </Container>
    </main>
  );
}
