"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  // NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import { useState } from "react";

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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
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
