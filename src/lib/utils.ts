export const qs = (str = "") => {
  const params = str.replace("?", "").split("&");
  if (!params.length) {
    return null;
  }
  return params.reduce((a, b) => {
    const [key, val] = b.split("=");
    return {
      ...a,
      [key]: val,
    };
  }, {} as { [k: string]: any });
};
export const getuuid = (spec: number | string = Date.now()) =>
  btoa(`${spec}${Math.random()}`);
