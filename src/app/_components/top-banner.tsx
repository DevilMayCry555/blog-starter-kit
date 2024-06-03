"use client";

import { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  // NavDropdown
} from "react-bootstrap";

export default function TopBanner({ uid }: any) {
  const [show, set_show] = useState(false);

  useEffect(() => {
    if (location.pathname === "/map") {
      set_show(false);
    } else {
      set_show(true);
    }
  }, []);
  return show ? (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      // bg="dark"
      // data-bs-theme="dark"
      // sticky="top"
      fixed="top"
    >
      <Navbar.Brand href="/">
        <span className="opacity-0">gap</span>T.Y.D.L.Y
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/meeting/public">
            <span className="opacity-0">gap</span>广场
          </Nav.Link>
          <Nav.Link href="/draw">
            <span className="opacity-0">gap</span>画板
          </Nav.Link>
          <Nav.Link href="/demo">
            <span className="opacity-0">gap</span>ChatGPT
          </Nav.Link>
          <Nav.Link href="/guess">
            <span className="opacity-0">gap</span>看图
          </Nav.Link>
          {uid ? (
            <Nav.Link href={`/user/${btoa(uid)}`}>
              <span className="opacity-0">gap</span>
              我的
            </Nav.Link>
          ) : (
            <Nav.Link href="/api/login">
              <span className="opacity-0">gap</span>登录
            </Nav.Link>
          )}
          {/* <NavDropdown className="px-4" title="安卓app" id="basic-nav-dropdown">
            <NavDropdown.Item href="/assets/jianfei.apk">
              Deep 2024.05.23
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/backdoor/room">团建</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : null;
}
