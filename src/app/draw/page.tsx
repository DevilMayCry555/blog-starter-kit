import BaseModal from "../_components/base-modal";
import BaseForm from "../_components/base-form";
import Drawer from "./draw-drawer";

async function Draw() {
  const createProps = {
    action: "/api/room",
    method: "draw",
    columns: [
      {
        field: "uid",
        label: "代号",
        type: "input",
      },
      {
        field: "password",
        label: "口令",
        type: "input",
        required: false,
      },
    ],
  };
  const joinProps = {
    action: "/api/room",
    method: "draw",
    columns: [
      {
        field: "password",
        label: "口令",
        type: "input",
        required: false,
      },
    ],
  };
  return (
    <div className="min-h-screen w-2/4 m-auto">
      <Drawer />
      <BaseModal action="创建房间" title="create">
        <BaseForm {...createProps} />
      </BaseModal>
      <BaseModal action="加入房间" title="join">
        <BaseForm {...joinProps} />
      </BaseModal>
    </div>
  );
}

export default Draw;
