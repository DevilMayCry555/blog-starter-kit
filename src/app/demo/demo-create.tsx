"use client";

import { getuuid } from "@/lib/utils";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function DemoCreate({
  fields = { username: "用户名" },
  ...rest
}: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>新增</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-slate-300">
          <form action="/api/user" method="POST" {...rest} encType="text/plain">
            {Object.entries(fields).map((it) => {
              const [field, label] = it;
              const uuid = getuuid(field);
              return (
                <div className="underline-offset-0">
                  <label
                    htmlFor={uuid}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {String(label)}:
                  </label>
                  <input
                    key={field}
                    id={uuid}
                    name={field}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              );
            })}
            <Button type="submit">new</Button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
