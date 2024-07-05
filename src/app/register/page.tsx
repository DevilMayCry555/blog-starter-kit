import BaseForm from "../_components/base-form";
import BaseModal from "../_components/base-modal";

export default function Login() {
  const reProps = {
    action: "/api/user",
    method: "register",
    columns: [
      {
        field: "username",
        label: "邮箱(生日会发专属祝福)",
        type: "email",
      },
      {
        field: "password",
        label: "密码(由数字和字母组成)",
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
      <BaseModal action="register" title="register">
        <BaseForm {...reProps} />
      </BaseModal>
    </main>
  );
}
