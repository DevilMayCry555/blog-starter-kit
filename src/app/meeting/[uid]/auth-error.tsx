import BaseForm from "@/app/_components/base-form";
import BaseModal from "@/app/_components/base-modal";

async function AuthError({ uid }: any) {
  const joinProps = {
    action: "/api/room",
    method: "join",
    columns: [
      {
        field: "uid",
        label: "代号",
        type: "input",
        init: uid,
      },
      {
        field: "password",
        label: "口令",
        type: "input",
      },
    ],
  };

  return (
    <div className="min-h-screen w-2/4 m-auto">
      <BaseModal action="加入房间" title="join">
        <BaseForm {...joinProps} />
      </BaseModal>
    </div>
  );
}

export default AuthError;
