import axios from "axios";

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

export default service;
