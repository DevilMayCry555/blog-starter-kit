import Container from "../../_components/container";
import BaseForm from "../../_components/base-form";
import BaseTable from "../../_components/base-table";
import BaseModal from "../../_components/base-modal";
import BasePagination from "../../_components/base-pagination";

import { fetchRooms } from "@/lib/sql";

export default async function Backdoor({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { fields, rows, total } = await fetchRooms(current, pageSize);
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
        required: false,
      },
    ],
  };
  const actions = (row: any) => {
    return [
      {
        text: "删除",
        action: "/api/room",
        method: "delete",
        params: {
          uid: row.uid,
        },
      },
      {
        text: "清空",
        action: "/api/room",
        method: "clear",
        params: {
          uid: row.uid,
        },
      },
      {
        text: "查看",
        action: "/meeting/" + row.uid,
        method: "router",
      },
    ];
  };
  return (
    <main>
      <Container>
        <BaseModal action="create" title="create user">
          <BaseForm {...createProps} />
        </BaseModal>
        <BaseTable fields={fields} rows={rows} actions={actions} />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/backdoor/room"
        />
      </Container>
    </main>
  );
}
