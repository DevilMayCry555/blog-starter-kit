import Container from "@/app/_components/container";
import { fetchUser } from "@/lib/sql";
import { notFound } from "next/navigation";
import UserArts from "@/app/_components/user-arts";
import { User as MyUser } from "@nextui-org/react";
import BaseModal from "@/app/_components/base-modal";
import BaseForm from "@/app/_components/base-form";
import BaseCard from "@/app/_components/base-card";
import BaseList from "@/app/_components/base-list";

const transfer = (obj: { [k: string]: any }) =>
  Object.entries({ ...obj }).map(([label, value]) => ({ label, value }));
const Control = transfer({
  "/backdoor/user": "user",
  "/backdoor/room": "room",
  "/backdoor/location": "usage",
});
export default async function User({ params }: Params) {
  const uid = decodeURIComponent(params.uid);
  const info = await fetchUser(atob(uid), { art: true });
  if (!info) {
    return notFound();
  }
  const { username, birthday, arts, draw, url: email, admin } = info;
  const Desc = () => (
    <>
      <div>{birthday ?? "未设置生日"}</div>
      <div>{email ?? "未设置邮箱"}</div>
    </>
  );
  const updateProps = {
    action: "/api/user",
    method: "update",
    form: { uid: info.uid },
    columns: [
      {
        field: "birthday",
        label: "生日",
        type: "date",
        init: birthday,
      },
      {
        field: "username",
        label: "昵称",
        type: "input",
        init: username,
      },
      {
        field: "email",
        label: "邮箱",
        type: "email",
        init: email,
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
            description={<Desc />}
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
          <BaseModal action="编辑" title="update user">
            <BaseForm {...updateProps} />
          </BaseModal>
        </div>
        {admin === "1" &&
          transfer({
            Control,
          }).map((it, idx) => (
            <BaseCard title={it.label} key={idx}>
              <BaseList list={it.value} />
            </BaseCard>
          ))}
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
