import { notFound } from "next/navigation";
import Gravity from "./gravity";
import Solar from "./solar";
import Tank from "./tank";

export default async function Three({ params }: any) {
  const demo = params.demo;

  if (!demo) {
    return notFound();
  }

  return (
    <main className=" m-auto w-full">
      {demo === "gravity" && <Gravity />}
      {demo === "solar" && <Solar />}
      {demo === "tank" && <Tank />}
    </main>
  );
}
