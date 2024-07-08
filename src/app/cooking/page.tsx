import { fetchCooks } from "@/lib/sql";
import BaseTab from "@/app/_components/base-tab";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";
import Container from "../_components/container";
import { isDEV } from "@/lib/constants";

const types = ["凉菜", "炒菜", "煎炸", "蒸煮", "焖炖"];

export default async function Page() {
  const { rows } = await fetchCooks();
  // console.log(rows);
  const deleteProps = (uid: string) => ({
    action: "/api/cook",
    method: "delete",
    text: "del",
    form: { uid },
    columns: [],
  });
  const detailProps = (uid: string) => ({
    action: `/cooking/${uid}`,
    method: "",
    text: "res",
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
                {isDEV && <span className=" w-20 text-right">action</span>}
              </div>
            )}
            <div className=" flex justify-between">
              <span className=" w-16">{item.uid}</span>
              <span className=" flex-1">{item.name}</span>
              {isDEV && (
                <span className=" w-40 flex justify-end">
                  <BaseForm {...deleteProps(item.uid)} size="sm" />
                  <BaseForm {...detailProps(item.uid)} size="sm" />
                </span>
              )}
              <span className=" w-40 flex justify-end">
                <BaseForm {...detailProps(item.uid)} size="sm" />
              </span>
            </div>
          </div>
        )),
    };
  });
  const createProps = {
    action: "/api/cook",
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
    ],
  };
  return (
    <main className=" flex-1 relative">
      <Container>
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
