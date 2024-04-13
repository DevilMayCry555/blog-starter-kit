import { fetchArts } from "@/lib/sql";
import Container from "../_components/container";
import BasePagination from "../_components/base-pagination";
import Link from "next/link";

export default async function Guess({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { rows, total } = await fetchArts(current, pageSize);
  return (
    <main>
      <Container>
        {rows.map((row) => {
          const { uid, title } = row;
          return (
            <div key={uid} className="py-2 border-b-2 border-red-300">
              <Link href={`/guess/${uid}`}>{title}</Link>
            </div>
          );
        })}
        <BasePagination
          current={current}
          pageSize={pageSize}
          total={total}
          path="/draw"
        />
      </Container>
    </main>
  );
}
