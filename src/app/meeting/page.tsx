import { fetchRooms } from "@/lib/sql";
import Container from "../_components/container";
import BasePagination from "../_components/base-pagination";
import BaseModal from "../_components/base-modal";
import BaseForm from "../_components/base-form";
import BaseList from "../_components/base-list";
import Coze from "../_components/coze-chat";

const createProps = {
  action: "/api/room",
  method: "create",
  columns: [
    {
      field: "uid",
      label: "代号",
      type: "input",
    },
    {
      field: "password",
      label: "口令",
      type: "input",
    },
    {
      field: "authcode",
      label: "授权码(五位数字)",
      type: "input",
    },
  ],
};
export default async function Page({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { rows, total } = await fetchRooms(current, pageSize);
  return (
    <main className=" flex-1 relative">
      <div className=" fixed bottom-8 left-4">
        <BaseModal action="create" title="create">
          <BaseForm {...createProps} />
        </BaseModal>
      </div>
      <Container>
        <BaseList
          list={rows.map((it) => ({
            label: `/meeting/${it.uid}`,
            value: it.uid,
          }))}
        />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/meeting"
        />
      </Container>
      <Coze />
    </main>
  );
}
