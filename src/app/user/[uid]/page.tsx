import Container from "@/app/_components/container";
import { fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import UserArts from "@/app/_components/user-arts";
import { User as MyUser } from "@nextui-org/react";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";

export default async function User({ params }: Params) {
  const uid = decodeURIComponent(params.uid);
  const info = await fetchUser(atob(uid), { art: true });
  if (!info) {
    return notFound();
  }
  const { username, birthday, admin, arts, draw } = info;
  const updateProps = {
    action: "/api/user",
    method: "update",
    columns: [
      {
        field: "uid",
        label: "uid",
        type: "input",
        init: info.uid,
        hidden: true,
      },
      {
        field: "birthday",
        label: "生日",
        type: "date",
        init: birthday,
      },
    ],
  };
  return (
    <main className=" flex-1">
      <Container>
        <div className=" text-2xl py-4">基本信息</div>
        <div className=" flex justify-between items-center">
          <MyUser
            name={username}
            description={`${birthday} ${Number(admin) && "管理员"}`}
            avatarProps={{
              src: draw,
              isBordered: true,
              imgProps: {
                style: {
                  backgroundColor: "#fff",
                },
              },
            }}
          />
          <BaseModal action="update" title="update user">
            <BaseForm {...updateProps} />
          </BaseModal>
        </div>

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
