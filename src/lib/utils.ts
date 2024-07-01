export const qs = (str = "") => {
  const params = str.replace("?", "").split("&");
  if (!params.length) {
    return null;
  }
  return params.reduce((a, b) => {
    const [key, val] = b.split("=");
    return {
      ...a,
      [key]: decodeURIComponent(val),
    };
  }, {} as { [k: string]: any });
};
export const qstr = (url: string, obj: Object) =>
  url +
  "?" +
  Object.entries(obj)
    .map((it) => {
      const [key, val] = it;
      return `${key}=${val}`;
    })
    .join("&");
export const getuuid = (spec: number | string = Date.now()) =>
  btoa(`${spec}${Math.random()}`);
