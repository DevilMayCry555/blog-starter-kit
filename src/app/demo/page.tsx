import Container from "../_components/container";
import BaseForm from "../_components/base-form";
import BaseTable from "../_components/base-table";
import BaseModal from "../_components/base-modal";
import BasePagination from "../_components/base-pagination";

import req from "@/lib/request";
import "bootstrap/dist/css/bootstrap.min.css";

export default async function Demo({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { data } = await req.get("/api/user", {
    params: {
      current,
      pageSize,
    },
  });
  const { fields, rows, total } = data;
  const formProps = {
    action: "/api/user",
    method: "new",
    columns: [
      {
        field: "username",
        label: "用户名",
        type: "input",
      },
    ],
  };
  const actions = [
    {
      text: "删除",
      action: "/api/user",
      params: (row: any) => {
        return {
          method: "delete",
          uid: row.uid,
        };
      },
    },
  ];
  return (
    <main>
      <Container>
        <BaseModal action="new" title="new user">
          <BaseForm {...formProps} />
        </BaseModal>
        <BaseTable fields={fields} rows={rows} actions={actions} />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/demo"
        />
      </Container>
    </main>
  );
}
