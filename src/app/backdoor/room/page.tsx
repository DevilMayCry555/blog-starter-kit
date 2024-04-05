import Container from "../../_components/container";
import BaseForm from "../../_components/base-form";
import BaseTable from "../../_components/base-table";
import BaseModal from "../../_components/base-modal";
import BasePagination from "../../_components/base-pagination";

import req from "@/lib/request";
import { cookies } from "next/headers";

export default async function Backdoor({ searchParams }: any) {
  const token = cookies().get("auth-token");
  const { current = 1, pageSize = 10 } = searchParams;
  const { data } = await req.get("/api/room", {
    params: {
      current,
      pageSize,
    },
    headers: {
      ["role-token"]: token?.value,
    },
  });
  const { fields, rows, total } = data;
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
