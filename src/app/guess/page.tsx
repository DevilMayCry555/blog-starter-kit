import { fetchArts } from "@/lib/sql";
import Container from "../_components/container";
import BasePagination from "../_components/base-pagination";

export default async function Guess({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { rows, total } = await fetchArts(current, pageSize);
  return (
    <main className=" flex-1 relative">
      <Container>
        {rows.map((row) => {
          const { uid, title } = row;
          // console.log(row);
          return (
            <div key={uid} className="py-2 border-b-2 border-red-300">
              <a href={`/guess/${uid}`}>{title}</a>
            </div>
          );
        })}
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
