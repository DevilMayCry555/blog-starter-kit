import Container from "../../_components/container";
import BaseTable from "../../_components/base-table";
import BasePagination from "../../_components/base-pagination";

import { fetchRooms } from "@/lib/sql";

export default async function Backdoor({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { fields, rows, total } = await fetchRooms(current, pageSize);
  const actions = (row: any) => {
    return {
      ...row,
      actions: [
        {
          text: "删除",
          action: "/api/room",
          method: "delete",
          params: {
            uid: row.uid,
          },
        },
        {
          text: "查看",
          action: `/meeting/${row.uid}`,
          method: "router",
        },
      ],
    };
  };
  return (
    <main className=" flex-1 overflow-hidden">
      <Container>
        <BaseTable fields={fields} rows={rows.map(actions)} />
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
