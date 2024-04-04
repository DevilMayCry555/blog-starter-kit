"use client";

import Container from "@/app/_components/container";
// import { EXAMPLE_PATH } from "@/lib/constants";
import { Placeholder } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <Placeholder as="p" animation="wave">
          <Placeholder xs={12} bg="primary" />
          <Placeholder xs={12} bg="secondary" />
          <Placeholder xs={12} bg="success" />
          <Placeholder xs={12} bg="danger" />
          <Placeholder xs={12} bg="warning" />
          <Placeholder xs={12} bg="info" />
          <Placeholder xs={12} bg="dark" />
          <Placeholder xs={12} bg="light" />
        </Placeholder>
      </Container>
    </footer>
  );
}

export default Footer;
