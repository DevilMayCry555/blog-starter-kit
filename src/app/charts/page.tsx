import BaseCharts from "../_components/base-charts";
import { stacked } from "./example";

export default async function Charts() {
  return (
    <main className=" flex-1">
      {Object.entries({ stacked }).map(([key, opt], idx) => (
        <BaseCharts
          key={idx}
          config={opt}
          id={`ex-${key}`}
          className=" w-full h-screen"
        />
      ))}
    </main>
  );
}
