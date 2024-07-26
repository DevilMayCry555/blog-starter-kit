import { fetchArts } from "@/lib/sql";
import Container from "../_components/container";
import BasePagination from "../_components/base-pagination";
import BaseList from "../_components/base-list";

export default async function Page({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { rows, total } = await fetchArts(current, pageSize);
  return (
    <main className=" flex-1 relative">
      <Container>
        <BaseList
          list={rows.map((it) => ({
            label: `/guess/${it.uid}`,
            value: it.title,
          }))}
        />
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/guess"
        />
      </Container>
    </main>
  );
}
