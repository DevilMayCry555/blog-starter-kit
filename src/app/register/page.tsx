import BaseForm from "../_components/base-form";

export default function Login() {
  const reProps = {
    action: "/api/user",
    method: "register",
    columns: [
      {
        field: "username",
        label: "昵称",
        type: "input",
      },
      {
        field: "email",
        label: "邮箱",
        type: "email",
      },
      {
        field: "password",
        label: "密码",
        type: "input",
      },
      {
        field: "authcode",
        label: "授权码(五位数字)",
        type: "input",
      },
    ],
  };
  return (
    <main className=" m-auto">
      <b>密码 建议复杂点，注册后不可更改</b>
      <hr />
      <b>注册后，可前往个人信息页面编辑生日</b>
      <hr />
      <BaseForm {...reProps} />
    </main>
  );
}
