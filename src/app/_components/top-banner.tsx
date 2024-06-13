"use client";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function TopBanner({ uid }: any) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      // bg="dark"
      // data-bs-theme="dark"
      // sticky="top"
      fixed="top"
    >
      <Navbar.Brand href="/">
        <span className="opacity-0">空白</span>T.Y.D.L.Y
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/map">
            <span className="opacity-0">空白</span>天气
          </Nav.Link>
          <Nav.Link href="/meeting/public">
            <span className="opacity-0">空白</span>广场
          </Nav.Link>
          <Nav.Link href="/draw">
            <span className="opacity-0">空白</span>画板
          </Nav.Link>
          <Nav.Link href="/guess">
            <span className="opacity-0">空白</span>竞猜
          </Nav.Link>
          <Nav.Link href="/demo">
            <span className="opacity-0">空白</span>GPT
          </Nav.Link>
          {uid ? (
            <Nav.Link href={`/user/${btoa(uid)}`}>
              <span className="opacity-0">空白</span>
              个人中心
            </Nav.Link>
          ) : (
            <Nav.Link href="/api/login">
              <span className="opacity-0">空白</span>
              用户登录
            </Nav.Link>
          )}
          <NavDropdown className="px-4" title="App" id="basic-nav-dropdown">
            <NavDropdown.Item href="/deep.apk">Deep@2024.06</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="/backdoor/room">团建</NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown className="px-4" title="3D" id="basic-nav-dropdown">
            <NavDropdown.Item href="/three/solar">太阳系</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/three/tank">火车</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/three/g">重力</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
