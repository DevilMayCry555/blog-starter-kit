export default async function M3u8({ params }: Params) {
  const src = decodeURIComponent(atob(decodeURIComponent(params.src)));
  return (
    <main className=" flex-1 overflow-auto">
      <iframe
        src={`https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html?source=${src}`}
        width={1080}
        height="100%"
        className=" m-auto"
      ></iframe>
    </main>
  );
}
type Params = {
  params: {
    src: string;
  };
};
