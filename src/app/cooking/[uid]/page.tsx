import BaseForm from "@/app/_components/base-form";
import BaseModal from "@/app/_components/base-modal";
import { isDEV } from "@/lib/constants";
import { fetchCook, fetchFoods } from "@/lib/sql";

export default async function Page({ params }: Params) {
  const { rows: foods } = await fetchFoods();
  const { rows, info } = await fetchCook(params.uid);
  let n = 0;
  const counter = (total: number, ca: number) => {
    const r = (total / 100) * ca;
    n += r;
    return r;
  };
  const recipes = rows.map((it) => {
    const detail = foods.find((f) => f.uid === it.foodid);
    return {
      ...detail,
      ...it,
      //   ca: counter(+it.g, +it.calorie).toFixed(2),
    };
  });
  const addProps = {
    action: "/api/cook",
    method: "add",
    form: { uid: params.uid },
    columns: [
      {
        field: "foodid",
        label: "食材",
        type: "select",
        options: foods.map((it) => ({ label: it.name, value: it.uid })),
      },
      {
        field: "g",
        label: "用量(g)",
        type: "number",
      },
    ],
  };
  return (
    <main className=" flex-1 p-4">
      <BaseModal action="add" title="添加原料" dismiss={false}>
        <BaseForm {...addProps} />
      </BaseModal>
      <div>{info.name}</div>
      <div className=" flex justify-between">
        <span>名称</span>
        <span>用量</span>
        <span>能量</span>
      </div>
      {recipes.map((it) => (
        <div className=" flex justify-between">
          <span>{it.name}</span>
          <span>{it.g}g</span>
          <span>{counter(+it.g, +it.calorie)}</span>
        </div>
      ))}
      <div>{n}</div>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
