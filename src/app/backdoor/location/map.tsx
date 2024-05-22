"use client";

import { useEffect } from "react";
import "./map.css";

interface Prop {
  locations: any[];
}
export default function AMapContainer({ locations }: Prop) {
  let map: any = null;

  useEffect(() => {
    if (typeof window === "undefined") {
      console.log("miss");
    } else {
      (window as any)._AMapSecurityConfig = {
        securityJsCode: "a6475c5f871996a8a1e544251b263822",
      };

      import("@amap/amap-jsapi-loader").then((AMapLoader) => {
        AMapLoader.load({
          key: "559e609208e3e6d726a285abfbc116f8", //申请好的 Web 端开发者 Key，首次调用 load 时必填
          version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
          plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['AMap.Scale','...','...']
        })
          .then((AMap) => {
            map = new AMap.Map("map-container", {
              // 设置地图容器id
              // viewMode: "3D", // 是否为3D地图模式
              zoom: 5, // 初始化地图级别
              // center: [+lo + 0.006, +la + 0.0001], // 初始化地图中心点位置
            }); //"map-container"为 <div> 容器的 id
            // 绘制坐标点
            const counter: { [k: string]: number } = {};
            locations.forEach((item) => {
              const { user_id, content, create_time } = item;
              // const [Latitude, Longitude] = String(content)
              //   .split(",")
              //   .map((it) => Number(String(it).split(":")[1]));
              // const index = locations
              //   .filter((it) => it["user_id"] === user_id)
              //   .indexOf(item);
              // const position = new AMap.LngLat(
              //   Longitude + 0.006,
              //   Latitude + 0.0001
              // ); //Marker 经纬度
              // const marker = new AMap.Marker({
              //   position: position,
              //   content: `<div class="custom-content-marker">
              //   <div class="custom-content-marker-banner" title="${create_time}">${user_id}(${index})</div>
              //   <img src="/assets/map-marker.png">
              //   </div>`, //将 html 传给 content
              //   offset: new AMap.Pixel(-13, -30), //以 icon 的 [center bottom] 为原点
              // });
              // map.add(marker);
              const isNew = counter[content] === undefined;
              counter[content] = isNew ? 0 : counter[content] + 1;
              if (isNew) {
                const [southWest, northEast] = String(content).split(";");
                const [swlo, swla] = southWest.split(",");
                const [nelo, nela] = northEast.split(",");
                const bounds = new AMap.Bounds(
                  new AMap.LngLat(+swlo, +swla),
                  new AMap.LngLat(+nelo, +nela)
                );
                var rectangle = new AMap.Rectangle({
                  bounds, //矩形的范围
                  strokeColor: "red", //轮廓线颜色
                  strokeWeight: 6, //轮廓线宽度
                  strokeOpacity: 0.5, //轮廓线透明度
                  strokeStyle: "dashed", //轮廓线样式，dashed 虚线，还支持 solid 实线
                  strokeDasharray: [30, 10], //勾勒形状轮廓的虚线和间隙的样式，30代表线段长度 10代表间隙长度
                  fillColor: "transparent", //矩形填充颜色
                  fillOpacity: 0.5, //矩形填充透明度
                  cursor: "pointer", //指定鼠标悬停时的鼠标样式
                  zIndex: 50, //矩形在地图上的层级
                });
                map.add(rectangle);
              }
            });
            console.log(counter);
          })
          .catch((e) => {
            console.log(e);
          });
      });
    }

    return () => {
      map?.destroy();
    };
  }, []);
  return <div id="map-container" className=" min-h-screen -my-14"></div>;
}
