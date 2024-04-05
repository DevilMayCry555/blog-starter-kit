"use client";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function TopBanner({ cookie }: any) {
  const [uid, username] = cookie ? JSON.parse(atob(cookie.value)) : [];
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
            <span className="opacity-0">gap</span>Meeting
          </Nav.Link>
          <Nav.Link href="/backdoor" className="hidden">
            <span className="opacity-0">gap</span>Config
          </Nav.Link>
          {uid && (
            <Nav.Link href={`/user/${uid}`}>
              <span className="opacity-0">gap</span>
              Hello, {username}
            </Nav.Link>
          )}
          {uid ? (
            <Nav.Link href="/api/logout">
              <span className="opacity-0">gap</span>Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/api/login">
              <span className="opacity-0">gap</span>Login
            </Nav.Link>
          )}
          <NavDropdown
            className="px-4"
            title="Backdoor"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/backdoor/user">User</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/backdoor/room">Room</NavDropdown.Item>
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
