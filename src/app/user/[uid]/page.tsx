import Container from "@/app/_components/container";
import { fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import UserArts from "@/app/_components/user-arts";
import { User as MyUser } from "@nextui-org/react";

export default async function User({ params }: Params) {
  const uid = decodeURIComponent(params.uid);
  const info = await fetchUser(atob(uid), { art: true });
  if (!info) {
    return notFound();
  }
  const { username, birthday, admin, arts } = info;
  return (
    <main className=" flex-1">
      <Container>
        <div className=" text-2xl py-4">基本信息</div>
        <MyUser
          name={username}
          description={`${birthday} ${Number(admin) && "管理员"}`}
          // avatarProps={{
          //   src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          // }}
        />

        <div className=" text-2xl py-4">你画我猜</div>
        <UserArts listData={arts} />
      </Container>
    </main>
  );
}
type Params = {
  params: {
    uid: string;
  };
};
