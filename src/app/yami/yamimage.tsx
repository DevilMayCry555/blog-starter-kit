import { Image, User } from "@nextui-org/react";

const getBase64 = async (url: string) => {
  const b64 = await (await fetch(url)).text();
  return `data:image/png;base64,${b64.slice(1)}`;
};

export default async function Yamimage({
  url,
  name,
  desc,
}: {
  url: string;
  name?: string;
  desc?: string;
}) {
  const src = await getBase64(url);
  if (name) {
    return (
      <User
        name={name}
        description={desc}
        avatarProps={{
          src: src,
          isBordered: true,
          imgProps: {
            style: {
              backgroundColor: "#fff",
            },
          },
          size: "sm",
        }}
      />
    );
  }
  return <Image src={src} width={300} />;
}
