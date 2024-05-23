"use client";

import { useEffect, useState } from "react";
import "./amap.css";
import { BASE_URL } from "@/lib/constants";

export default function AMapContainer() {
  let map: any = null;
  let prev: any = null;
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
          key: "559e609208e3e6d726a285abfbc116f8", //申请好的 Web 端开发者 Key，首次调用 load 时必填
          version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
          plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['AMap.Scale','...','...']
        })
          .then((AMap) => {
            map = new AMap.Map("map-container", {
              // 设置地图容器id
              // viewMode: "3D", // 是否为3D地图模式
              zoom: 16, // 初始化地图级别
            }); //"map-container"为 <div> 容器的 id

            // 天气
            const onWeather = (adcode: string) => {
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
                      `${weather} 温:${temperature}℃ 湿:${humidity}% 风:${windDirection}${windPower}级`
                    );
                  }
                });
              });
            };
            // 定位
            const onGeo = () => {
              // 精确定位
              // AMap.plugin("AMap.Geolocation", function () {
              //   var geolocation = new AMap.Geolocation({
              //     enableHighAccuracy: true, // 是否使用高精度定位，默认：true
              //     timeout: 10000, // 设置定位超时时间，默认：无穷大
              //     // offset: [10, 20], // 定位按钮的停靠位置的偏移量
              //     // zoomToAccuracy: true, //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              //     // position: "RB", //  定位按钮的排放位置,  RB表示右下
              //   });

              //   geolocation.getCurrentPosition(function (
              //     status: string,
              //     result: any
              //   ) {
              //     if (status == "complete") {
              //       // data是具体的定位信息
              //       console.log("result", result);
              //       if (result.position) {
              //         prev = new AMap.Marker({
              //           position: result.position,
              //           content: `<div class="custom-content-marker">
              //           <div class="custom-content-marker-animate">
              //             <img src="/assets/map-marker-current.png">
              //           </div>
              //           <img src="/assets/map-marker-current.png">
              //           </div>`,
              //           offset: new AMap.Pixel(-13, -30),
              //         });
              //         map.setCenter(result.position);
              //         map.add(prev);
              //       }
              //       // set_address(result.regeocode.formattedAddress);
              //     } else {
              //       // 定位出错
              //       console.log("lalala error");
              //     }
              //   });
              // });
              // ip定位
              AMap.plugin("AMap.CitySearch", function () {
                var citySearch = new AMap.CitySearch();
                citySearch.getLocalCity(function (status: string, result: any) {
                  if (status === "complete" && result.info === "OK") {
                    // 查询成功，result即为当前所在城市信息
                    console.log("result", result);
                    const { bounds, province, city, adcode } = result;
                    //创建矩形 Rectangle 实例
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
                    //矩形 Rectangle 对象添加到 Map
                    map.add(rectangle);
                    //根据覆盖物范围调整视野
                    map.setFitView([rectangle]);
                    set_address(`${province} ${city}`);
                    // onWeather(adcode);
                    // fetch(BASE_URL + "/api/open", {
                    //   method: "POST",
                    //   body: JSON.stringify({
                    //     title: "location",
                    //     content: result.rectangle,
                    //     points: 1,
                    //     identity: location.hash.replace("#", ""),
                    //     type: 0,
                    //   }),
                    //   headers: {
                    //     "Content-Type": "application/json",
                    //     Accept: "application/json",
                    //   },
                    //   cache: "no-store",
                    // });
                  }
                });
              });
            };
            const onHashChange = () => {
              const [lo, la] = location.hash.split("/").slice(1);
              const config = !Number.isNaN(+lo) &&
                !Number.isNaN(+la) && [+lo + 0.006, +la + 0.0001];
              if (config) {
                const [Longitude, Latitude] = config;
                const position = new AMap.LngLat(Longitude, Latitude);
                if (prev) {
                  map.remove(prev);
                }
                prev = new AMap.Marker({
                  position: position,
                  content: `<div class="custom-content-marker">
                  <div class="custom-content-marker-animate">
                  <img src="/assets/map-marker-current.png">
                  </div>
                  <img src="/assets/map-marker-current.png">
                  </div>`,
                  offset: new AMap.Pixel(-13, -30),
                });
                map.add(prev);
                map.setCenter(position);
                // 逆地理编码
                AMap.plugin("AMap.Geocoder", function () {
                  var geocoder = new AMap.Geocoder({
                    city: "010", // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                  });

                  var lnglat = [Longitude, Latitude];

                  geocoder.getAddress(
                    lnglat,
                    function (status: string, result: any) {
                      if (status === "complete" && result.info === "OK") {
                        // result为对应的地理位置详细信息
                        // console.log("result", result);
                        set_address(result.regeocode.formattedAddress);
                      }
                    }
                  );
                });
              } else {
                onGeo();
              }
            };
            onHashChange();
            // window.addEventListener("hashchange", onHashChange, false);
          })
          .catch((e) => {
            console.log(e);
            set_area(JSON.stringify(e));
          });
      });
    }

    return () => {
      map?.destroy();
    };
  }, []);
  return (
    <div className=" relative">
      <div id="map-container" className=" min-h-screen -my-14"></div>
      <div className=" absolute top-0 left-0 right-0 bg-slate-500 text-white text-center">
        {address}
        <div>{area}</div>
      </div>
    </div>
  );
}
