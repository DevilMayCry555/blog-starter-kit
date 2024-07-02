"use client";

import { useEffect, useState } from "react";
import "./amap.css";
import Dictree from "./dictree";
// import { Spinner } from "@nextui-org/react";

const amap_jsapi_key = "559e609208e3e6d726a285abfbc116f8";

let map: any = null;
export default function AMapContainer() {
  const [area, set_area] = useState("");
  // 区划树
  const [dict, set_dict] = useState();

  useEffect(() => {
    if (typeof window === "undefined") {
      console.log("miss");
    } else {
      (window as any)._AMapSecurityConfig = {
        securityJsCode: "a6475c5f871996a8a1e544251b263822",
      };

      import("@amap/amap-jsapi-loader").then((AMapLoader) => {
        AMapLoader.load({
          key: amap_jsapi_key, //申请好的 Web 端开发者 Key，首次调用 load 时必填
          version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
          plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['AMap.Scale','...','...']
        })
          .then((AMap) => {
            map = new AMap.Map("map-container", {
              // 设置地图容器id
              // viewMode: "3D", // 是否为3D地图模式
              zoom: 8, // 初始化地图级别
            }); //"map-container"为 <div> 容器的 id
            AMap.plugin("AMap.DistrictSearch", function () {
              const districtSearch = new AMap.DistrictSearch({
                level: "country", //关键字对应的行政区级别，country 表示国家
                subdistrict: 2, //显示下级行政区级数，1表示返回下一级行政区
                extensions: "all", //返回行政区边界坐标组等具体信息
              });
              //搜索所有省、直辖市信息
              districtSearch.search(
                "中国",
                function (status: string, result: any) {
                  console.log(status, result);
                  //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误
                  //查询成功时，result 即为对应的行政区信息
                  const [china] = result.districtList;
                  set_dict(
                    china.districtList.filter((it: any) =>
                      ["370000", "210000"].includes(it.adcode)
                    )
                  );
                }
              );
              // 点击查询
              const district = new AMap.DistrictSearch({
                extensions: "all", //返回行政区边界坐标等具体信息
                level: "district", //设置查询行政区级别为区
              });
              const prev: any[] = [];
              document
                .getElementById("weather-dict-select")
                ?.addEventListener("click", (e) => {
                  const { id } = e.target as any;
                  // console.log(id);
                  if (`${id}`.indexOf("tyd") < 0) {
                    return;
                  }
                  if (prev.length) {
                    prev.forEach((it) => map.remove(it));
                    prev.splice(0, 0);
                  }
                  const code = `${id}`.replace("tyd-", "");
                  district.search(code, function (status: string, result: any) {
                    console.log("DistrictSearch", status, result);
                    if (status === "complete" && result.info === "OK") {
                      const { districtList } = result;
                      [].concat(districtList).forEach((item: any) => {
                        const { boundaries, center } = item;
                        if (boundaries) {
                          for (let i = 0; i < boundaries.length; i++) {
                            //生成行政区划 polygon
                            prev.push(
                              new AMap.Polygon({
                                map: map, //显示该覆盖物的地图对象
                                strokeWeight: 1, //轮廓线宽度
                                path: boundaries[i], //多边形轮廓线的节点坐标数组
                                fillOpacity: 0.2, //多边形填充透明度
                                fillColor: "#FF0000", //多边形填充颜色
                                strokeColor: "#CC66CC", //线条颜色
                              })
                            );
                          }
                          map.setCenter(center);
                        }
                      });
                    }
                  });
                  // 天气
                  AMap.plugin("AMap.Weather", function () {
                    //创建天气查询实例
                    var weather = new AMap.Weather();
                    //执行实时天气信息查询
                    weather.getLive(code, function (err: any, data: any) {
                      //err 正确时返回 null
                      //data 返回实时天气数据，返回数据见下表
                      console.log(err, data);
                      const {
                        temperature,
                        humidity,
                        weather,
                        windDirection,
                        windPower,
                      } = data;
                      if (err) {
                        set_area(JSON.stringify(err));
                      } else {
                        set_area(
                          `${weather}、${temperature}℃、${humidity}%、${windDirection}风${windPower}级`
                        );
                      }
                    });
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
    <div className=" flex-1 relative">
      <div id="map-container" className=" h-full w-full">
        {/* <Spinner className=" fixed top-1/2 left-1/2" /> */}
      </div>
      <div className=" absolute bottom-0 left-0 right-0 bg-slate-500 text-white text-right">
        <div>{area}</div>
        当前天气
      </div>
      <div
        id="weather-dict-select"
        className=" absolute top-0 right-0 p-4 bg-white h-1/2  overflow-auto w-80 scale-80"
      >
        <Dictree treeData={dict} />
      </div>
    </div>
  );
}
