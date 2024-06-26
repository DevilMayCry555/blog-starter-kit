import BaseForm from "@/app/_components/base-form";

export default async function Backdoor() {
  const createProps = {
    action: "/api/open",
    method: "",
    columns: [
      {
        field: "code",
        label: "用户名",
        type: "input",
      },
    ],
  };
  return (
    <main className=" m-auto">
      <p>查询微博UID，请在输入的UID前面加@</p>
      <BaseForm {...createProps} />
    </main>
  );
}
