"use client";

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  action: string;
  title: string;
  children: React.ReactNode;
}
export default function BaseModal({
  action = "--",
  title = "--",
  children,
}: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" className="my-4" onClick={handleShow}>
        {action}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-slate-300">{children}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
