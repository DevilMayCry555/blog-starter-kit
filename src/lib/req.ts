export async function REQ(
  url = "",
  method: any = "POST",
  data: any = undefined,
  cb?: () => void
) {
  const { body } = await fetch(url, {
    method,
    body: data && JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  }).finally(() => {
    cb?.();
  });
  const { value } = await body!.getReader().read();
  return JSON.parse(new TextDecoder().decode(value));
}
