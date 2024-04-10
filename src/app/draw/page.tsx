"use client";

import { useState } from "react";
import { Offcanvas, Button, CloseButton } from "react-bootstrap";
import DrawCanvas from "./draw-canvas";

function Draw() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="flex justify-center">
        <Button variant="outline-primary" onClick={handleShow}>
          打开画板
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeLabel="close">
          <Offcanvas.Title>canvas</Offcanvas.Title>
          <CloseButton type="qwer" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DrawCanvas />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Draw;
