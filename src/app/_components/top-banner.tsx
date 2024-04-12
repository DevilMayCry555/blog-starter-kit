"use client";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function TopBanner({ uid }: any) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      // bg="dark"
      // data-bs-theme="dark"
      sticky="top"
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
          {uid && (
            <Nav.Link href={`/user/${btoa(uid)}`}>
              <span className="opacity-0">gap</span>
              我的
            </Nav.Link>
          )}
          {uid ? (
            <Nav.Link href="/api/logout">
              <span className="opacity-0">gap</span>退出
            </Nav.Link>
          ) : (
            <Nav.Link href="/api/login">
              <span className="opacity-0">gap</span>登录
            </Nav.Link>
          )}
          <NavDropdown className="px-4" title="控制台" id="basic-nav-dropdown">
            <NavDropdown.Item href="/backdoor/user">用户</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/backdoor/room">团建</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
