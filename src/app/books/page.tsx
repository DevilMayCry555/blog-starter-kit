export default async function Books() {
  const res = await fetch("https://www.quanben.io/").then((r) => r.text());
  console.log(res);
  return res;
}
