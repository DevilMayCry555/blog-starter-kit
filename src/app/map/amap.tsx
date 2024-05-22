"use client";

import { useEffect, useState } from "react";
import "./amap.css";

export default function AMapContainer() {
  let map: any = null;
  let prev: any = null;
  const [address, set_address] = useState("");

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
            const onHashChange = () => {
              const [lo, la] = location.hash.split("/").slice(1);
              const config = !Number.isNaN(+lo) &&
                !Number.isNaN(+la) && [+lo + 0.006, +la + 0.0001];
              if (config) {
                if (prev) {
                  map.remove(prev);
                }
                const [Longitude, Latitude] = config;
                const position = new AMap.LngLat(Longitude, Latitude);
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
                map.setCenter(position);
                map.add(prev);
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
              }
            };
            onHashChange();
            window.addEventListener("hashchange", onHashChange, false);
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
    <div className=" relative">
      <div id="map-container" className=" min-h-screen -my-14"></div>
      <div className=" absolute top-0 left-0 right-0 bg-slate-500 text-white">
        {address}
      </div>
    </div>
  );
}
