"use client";

import { useEffect } from "react";

interface Prop {
  locations: any[];
}
let map: any = null;

const locals = ["100000"];

export default function AMapContainer({ locations }: Prop) {
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
              zoom: 3, // 初始化地图级别
              center: [108.932092, 34.329593], // 初始化地图中心点位置
            }); //"map-container"为 <div> 容器的 id
            // 绘制坐标点
            locations.forEach((local) => {
              const { content: adcode } = local;
              // console.log(item);
              if (locals.includes(adcode)) {
                return false;
              } else {
                locals.push(adcode);
              }
              AMap.plugin("AMap.DistrictSearch", function () {
                const district = new AMap.DistrictSearch({
                  extensions: "all", //返回行政区边界坐标等具体信息
                  level: "district", //设置查询行政区级别为区
                });
                district.search(adcode, function (status: string, result: any) {
                  console.log("DistrictSearch", status, result);
                  if (status === "complete" && result.info === "OK") {
                    const { districtList } = result;
                    [].concat(districtList).forEach((item: any) => {
                      const { boundaries: bounds, center } = item;
                      if (bounds) {
                        for (let i = 0; i < bounds.length; i++) {
                          //生成行政区划 polygon
                          new AMap.Polygon({
                            map: map, //显示该覆盖物的地图对象
                            strokeWeight: 1, //轮廓线宽度
                            path: bounds[i], //多边形轮廓线的节点坐标数组
                            fillOpacity: 0.2, //多边形填充透明度
                            fillColor: "#FF0000", //多边形填充颜色
                            strokeColor: "#CC66CC", //线条颜色
                          });
                        }
                      }
                      if (center) {
                        const text = new AMap.Marker({
                          position: center,
                          content: `<div style="color:#000;font-size:0.5em;width:300px">${local["create_time"]}</div>`,
                        });
                        map.add(text);
                      }
                    });
                  }
                });
              });
            });
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
  return (
    <div className=" flex-1">
      <div id="map-container" className=" h-full w-full"></div>
    </div>
  );
}
