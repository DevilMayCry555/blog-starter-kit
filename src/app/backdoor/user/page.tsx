import Container from "../../_components/container";
import BaseForm from "../../_components/base-form";
import BaseTable from "../../_components/base-table";
import BaseModal from "../../_components/base-modal";
import BasePagination from "../../_components/base-pagination";

import { fetchUsers } from "@/lib/sql";

export default async function Backdoor({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { fields, rows, total } = await fetchUsers(current, pageSize);
  const actions = (row: any) => {
    const { admin, uid, draw } = row;
    return {
      ...row,
      actions: [
        {
          text: "详情",
          action: "detail",
          method: "modal",
          params: {
            k: atob(uid),
          },
        },
        {
          text: "画板",
          action: "draw",
          method: "image",
          params: {
            data: draw,
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
          text: Number(admin) ? "off" : "on",
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
