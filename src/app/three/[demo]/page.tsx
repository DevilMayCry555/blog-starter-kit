import { notFound } from "next/navigation";
import G from "./g";
import Solar from "./solar";
import Tank from "./tank";

export default async function Three({ params }: any) {
  const demo = params.demo;

  if (!demo) {
    return notFound();
  }

  return (
    <main className=" m-auto w-1/2">
      {demo === "g" && <G />}
      {demo === "solar" && <Solar />}
      {demo === "tank" && <Tank />}
    </main>
  );
}
