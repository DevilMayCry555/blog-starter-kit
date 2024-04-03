import Container from "../_components/container";
import BaseForm from "../_components/base-form";
import BaseTable from "../_components/base-table";
import BaseModal from "../_components/base-modal";
import BasePagination from "../_components/base-pagination";

import req from "@/lib/request";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

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
      {
        field: "admin",
        label: "管理员权限",
        type: "checkbox",
      },
    ],
  };
  const actions = [
    {
      text: "删除",
      action: "/api/user",
      method: "delete",
      params: (row: any) => {
        return {
          uid: row.uid,
        };
      },
    },
  ];
  return (
    <main>
      <Container>
        <div>
          <Link href="/" className="hover:underline">
            Blog
          </Link>
        </div>
        <BaseModal action="create" title="create user">
          <BaseForm {...formProps} />
        </BaseModal>
        <BaseTable fields={fields} rows={rows} actions={actions} />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/backdoor"
        />
      </Container>
    </main>
  );
}
