import AMapContainer from "./amap";

const amap_web_key = "382ac00b0f966675fb9d96027c61811c";
export default async function Map() {
  // console.log(rows);
  const info = await fetch(
    `https://restapi.amap.com/v3/ip?key=${amap_web_key}`
  ).then((res) => res.json());
  return <AMapContainer info={info} />;
}
