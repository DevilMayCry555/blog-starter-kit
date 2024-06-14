"use client";

import { useEffect, useState } from "react";
import "./amap.css";
import { Spinner } from "@nextui-org/react";

const amap_jsapi_key = "559e609208e3e6d726a285abfbc116f8";

let map: any = null;
export default function AMapContainer() {
  const [address, set_address] = useState("");
  const [area, set_area] = useState("");

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
            // 定位
            AMap.plugin("AMap.CitySearch", function () {
              var citySearch = new AMap.CitySearch();
              citySearch.getLocalCity(function (status: string, result: any) {
                console.log(status, result);
                if (status === "complete" && result.info === "OK") {
                  // 查询成功，result即为当前所在城市信息
                  const { bounds, province, city, adcode } = result;
                  // 天气
                  AMap.plugin("AMap.Weather", function () {
                    //创建天气查询实例
                    var weather = new AMap.Weather();
                    //执行实时天气信息查询
                    weather.getLive(adcode, function (err: any, data: any) {
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
                  // 创建矩形 Rectangle 实例
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
                  // 矩形 Rectangle 对象添加到 Map
                  map.add(rectangle);
                  // 根据覆盖物范围调整视野
                  map.setFitView([rectangle]);
                  set_address(`${province} ${city}`);
                } else {
                  // error
                  set_address(`${status}`);
                }
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
        <Spinner className=" fixed top-1/2 left-1/2" />
      </div>
      <div className=" absolute bottom-0 left-0 right-0 bg-slate-500 text-white text-right">
        <div>{area}</div>
        {address}
      </div>
    </div>
  );
}
