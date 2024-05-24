import AMapContainer from "./amap";

export default async function Map() {
  const info = await fetch("http://ip-api.com/json/?lang=zh-CN ").then((res) =>
    res.json()
  );

  return <AMapContainer ipify={info} />;
}
