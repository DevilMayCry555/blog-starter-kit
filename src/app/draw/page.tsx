import { fetchArts } from "@/lib/sql";
import DrawDrawer from "./draw-drawer";
import Container from "../_components/container";
import BasePagination from "../_components/base-pagination";
import Link from "next/link";

export default async function Draw({ searchParams }: any) {
  const { current = 1, pageSize = 10 } = searchParams;
  const { rows, total } = await fetchArts(current, pageSize);
  return (
    <main>
      <Container>
        {rows.map((row) => {
          const { uid, title } = row;
          return (
            <div key={uid} className="py-2">
              <Link href={`/draw/${uid}`}>{title}</Link>
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
      <DrawDrawer />
    </main>
  );
}
