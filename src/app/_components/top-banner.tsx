"use client";

// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { ChevronDown } from "./icons.jsx";
import { useState } from "react";

export default function TopBanner({ uid }: any) {
  // return (
  //   <Navbar
  //     expand="lg"
  //     className="bg-body-tertiary"
  //     // bg="dark"
  //     // data-bs-theme="dark"
  //     // sticky="top"
  //     fixed="top"
  //   >
  //     <Navbar.Brand href="/">
  //       <span className="opacity-0">空白</span>T.Y.D.L.Y
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link href="/map">
  //           <span className="opacity-0">空白</span>天气
  //         </Nav.Link>
  //         <Nav.Link href="/meeting/public">
  //           <span className="opacity-0">空白</span>广场
  //         </Nav.Link>
  //         <Nav.Link href="/draw">
  //           <span className="opacity-0">空白</span>画板
  //         </Nav.Link>
  //         <Nav.Link href="/guess">
  //           <span className="opacity-0">空白</span>竞猜
  //         </Nav.Link>
  //         <Nav.Link href="/demo">
  //           <span className="opacity-0">空白</span>GPT
  //         </Nav.Link>
  //         {uid ? (
  //           <Nav.Link href={`/user/${btoa(uid)}`}>
  //             <span className="opacity-0">空白</span>
  //             个人中心
  //           </Nav.Link>
  //         ) : (
  //           <Nav.Link href="/api/login">
  //             <span className="opacity-0">空白</span>
  //             用户登录
  //           </Nav.Link>
  //         )}
  //         <NavDropdown className="px-4" title="App" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="/deep.apk">Deep@2024.06</NavDropdown.Item>
  //           {/* <NavDropdown.Divider />
  //           <NavDropdown.Item href="/backdoor/room">团建</NavDropdown.Item> */}
  //         </NavDropdown>
  //         <NavDropdown className="px-4" title="3D" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="/three/solar">太阳系</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="/three/tank">火车</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="/three/g">重力</NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemsPc = {
    "/map": "天气",
    "/meeting/public": "广场",
    "/demo": "GPT",
  };
  const menuItemsPhone = {
    "/meeting/public": "广场",
    "/draw": "画板",
    "/guess": "竞猜",
    "/demo": "GPT",
  };
  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* logo */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" color="foreground">
            <span className="font-bold">T.Y.D.L.Y</span>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* 非折叠 */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {Object.entries(menuItemsPc).map(([url, label]) => (
          <NavbarItem key={label}>
            <Link color="foreground" href={url} size="lg">
              {label}
            </Link>
          </NavbarItem>
        ))}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple endContent={icons.chevron} variant="light">
                Android
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="deep" href="/deep.apk">
              Deep@2024.06
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple endContent={icons.chevron} variant="light">
                ThreeJs
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="solar" href="/three/solar">
              solar
            </DropdownItem>
            <DropdownItem key="tank" href="/three/tank">
              tank
            </DropdownItem>
            <DropdownItem key="g" href="/three/g">
              g
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          {uid ? (
            <Link href={`/user/${btoa(uid)}`}>User</Link>
          ) : (
            <Link href="/api/login">Login</Link>
          )}
        </NavbarItem>
      </NavbarContent>
      {/* 折叠 */}
      <NavbarMenu>
        {Object.entries(menuItemsPhone).map(([url, label]) => (
          <NavbarMenuItem key={label}>
            <Link color="primary" className="w-full" href={url} size="lg">
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          {uid ? (
            <Link href={`/user/${btoa(uid)}`}>User</Link>
          ) : (
            <Link href="/api/login">Login</Link>
          )}
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
