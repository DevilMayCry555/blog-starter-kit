"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  // NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switch";
export default function TopBanner({ uid }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      {/* logo */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" color="foreground">
            <span className="font-bold">T.Y.D.L.Y</span>
          </Link>
        </NavbarBrand>
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        {uid && (
          <NavbarItem>
            <Link href={`/user/${btoa(uid)}`}>User</Link>
          </NavbarItem>
        )}
        <NavbarItem>
          {uid ? (
            <Link href="/api/logout">Logout</Link>
          ) : (
            <Link href="/api/login">Login</Link>
          )}
        </NavbarItem>
        {!uid && (
          <NavbarItem>
            <Link href="register">Register</Link>
          </NavbarItem>
        )}
      </NavbarContent>
      {/* 折叠 */}
      <NavbarMenu>
        {uid && (
          <NavbarItem>
            <Link href={`/user/${btoa(uid)}`}>User</Link>
          </NavbarItem>
        )}
        <NavbarItem>
          {uid ? (
            <Link href="/api/logout">Logout</Link>
          ) : (
            <Link href="/api/login">Login</Link>
          )}
        </NavbarItem>
        {!uid && (
          <NavbarItem>
            <Link href="register">Register</Link>
          </NavbarItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
