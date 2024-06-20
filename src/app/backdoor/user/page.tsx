import Container from "../../_components/container";
import BaseForm from "../../_components/base-form";
import BaseTable from "../../_components/base-table";
import BaseModal from "../../_components/base-modal";
import BasePagination from "../../_components/base-pagination";

import { fetchUsers } from "@/lib/sql";

export default async function Backdoor({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { fields, rows, total } = await fetchUsers(current, pageSize);
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
      // {
      //   field: "username",
      //   label: "用户名",
      //   type: "input",
      // },
      {
        field: "birthday",
        label: "生日",
        type: "date",
      },
    ],
  };
  const actions = (row: any) => {
    const { admin, uid } = row;
    return {
      ...row,
      actions: [
        {
          text: "查看",
          action: "detail",
          method: "modal",
          params: {
            uid: atob(uid),
          },
        },
        {
          text: "删除",
          action: "/api/user",
          method: "delete",
          params: {
            uid,
          },
        },
        {
          text: Number(admin) ? "管理 关" : "管理 开",
          action: "/api/user",
          method: "admin",
          params: {
            uid,
            admin,
          },
        },
      ],
    };
  };
  return (
    <main className=" flex-1 overflow-hidden">
      <Container>
        <BaseModal action="create" title="create user">
          <BaseForm {...createProps} />
        </BaseModal>
        <BaseModal action="update" title="update user">
          <BaseForm {...updateProps} />
        </BaseModal>
        <BaseTable
          fields={fields.filter((it) => !["uid", "draw"].includes(it.name))}
          rows={rows.map(actions)}
        />
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
