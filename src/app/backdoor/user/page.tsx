import Container from "../../_components/container";
import BaseForm from "../../_components/base-form";
import BaseTable from "../../_components/base-table";
import BaseModal from "../../_components/base-modal";
import BasePagination from "../../_components/base-pagination";

import req from "@/lib/request";

export default async function Backdoor({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { data } = await req.get("/api/user", {
    params: {
      current,
      pageSize,
    },
  });
  const { fields, rows, total } = data;
  const createProps = {
    action: "/api/user",
    method: "create",
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
  const updateProps = {
    action: "/api/user",
    method: "update",
    columns: [
      {
        field: "uid",
        label: "uid",
        type: "input",
      },
      {
        field: "birthday",
        label: "生日",
        type: "date",
      },
    ],
  };
  const actions = (row: any) => {
    const { admin } = JSON.parse(row.intro ?? "{}");
    return [
      {
        text: "删除",
        action: "/api/user",
        method: "delete",
        params: {
          uid: row.uid,
        },
      },
      {
        text: admin ? "关闭管理员" : "开启管理员",
        action: "/api/user",
        method: "admin",
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
        <BaseModal action="update" title="update user">
          <BaseForm {...updateProps} />
        </BaseModal>
        <BaseTable fields={fields} rows={rows} actions={actions} />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/backdoor/user"
        />
      </Container>
    </main>
  );
}
