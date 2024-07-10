import { fetchLocations } from "@/lib/sql";
import AMapContainer from "./map";

export default async function Backdoor() {
  const { rows } = await fetchLocations();
  // console.log(rows);
  return (
    <AMapContainer
      locations={rows.sort((a, b) =>
        new Date(b["create_time"]) > new Date(a["create_time"]) ? 1 : -1
      )}
    />
  );
}
