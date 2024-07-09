import { fetchFoods } from "@/lib/sql";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";
import Container from "../_components/container";
import Order from "./order";

const types = ["烹", "炒", "煎", "炸", "蒸", "煮", "炖"];

export default async function Eat() {
  const { rows } = await fetchFoods();
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

        <Order types={types} rows={rows} />
      </Container>
    </main>
  );
}
