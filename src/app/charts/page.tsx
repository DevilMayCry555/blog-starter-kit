import BaseCharts from "../_components/base-charts";
import { stacked } from "./example";

export default async function Charts() {
  return (
    <main className=" flex-1">
      <BaseCharts
        config={stacked}
        id="ex-stacked"
        className=" w-[400px] h-[300px]"
      />
    </main>
  );
}
