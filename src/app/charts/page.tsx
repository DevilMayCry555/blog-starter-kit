import Ebar from "./ebar";
import Stacked from "./stacked";

export default async function Charts() {
  return (
    <main className=" flex-1">
      <Ebar />
      <Stacked />
    </main>
  );
}
