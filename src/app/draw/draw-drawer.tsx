"use client";

import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import DrawCanvas from "./draw-canvas";

export default function DrawDrawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="outline-primary"
        className="mx-2 my-4"
        onClick={handleShow}
      >
        打开画板
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>canvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DrawCanvas />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
