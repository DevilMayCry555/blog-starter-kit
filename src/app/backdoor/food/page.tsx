import { fetchFoods } from "@/lib/sql";
import Container from "../../_components/container";
import BaseTab from "@/app/_components/base-tab";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";

const types = ["其他", "肉类", "蔬菜", "水果", "五谷", "蛋奶", "面食"];

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
        label: "calorie",
        type: "number",
      },
    ],
  };
  const updateProps = {
    action: "/api/food",
    method: "update",
    columns: [
      {
        field: "uid",
        label: "uid",
        type: "input",
      },
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
        label: "calorie",
        type: "number",
      },
    ],
  };
  return (
    <main className=" flex-1 relative">
      <Container>
        <BaseModal action="create" title="create food" dismiss={false}>
          <BaseForm {...createProps} />
        </BaseModal>
        <BaseModal action="update" title="update food" dismiss={false}>
          <BaseForm {...updateProps} />
        </BaseModal>
        <BaseTab group={group} vertical={true} />
      </Container>
    </main>
  );
}
