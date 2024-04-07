import axios from "axios";
// import { cookies } from "next/headers";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const isDEV = process.env.NODE_ENV === "development";
const baseURL = isDEV ? "http://localhost:3000" : "https://www.tydwin.top";

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: BASE_URL,
  baseURL,
  // 超时
  timeout: 10000,
});
// 添加请求拦截器
// service.interceptors.request.use(
//   function (config) {
//     const token = cookies().get("auth-token");
//     if (token) {
//       config.headers.set("Content-tyd", token.value);
//     }
//     // 在发送请求之前做些什么
//     return config;
//   },
//   function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

export default service;
