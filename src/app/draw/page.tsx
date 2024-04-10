"use client";

import { useState } from "react";
import { Offcanvas, Button, CloseButton } from "react-bootstrap";
import DrawCanvas from "./draw-canvas";
import BaseModal from "../_components/base-modal";
import BaseForm from "../_components/base-form";

function Draw() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <>
      <div className="min-h-screen flex flex-col items-center justify-around">
        <Button variant="outline-primary" onClick={handleShow}>
          打开画板
        </Button>
        <BaseModal action="创建房间" title="create">
          <BaseForm {...createProps} />
        </BaseModal>
        <BaseModal action="加入房间" title="join">
          <BaseForm {...joinProps} />
        </BaseModal>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>canvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DrawCanvas />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Draw;
