"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  // ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Flash } from "./icons";

interface Props {
  type?: string;
  action: string | number;
  title: string;
  dismiss?: boolean;
  children: React.ReactNode;
}
export default function BaseModal({
  action = "--",
  title = "--",
  children,
  type = "modal",
  dismiss = true,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {type === "modal" && (
        <Button color="primary" onPress={onOpen}>
          {action}
        </Button>
      )}
      {type === "image" && (
        <Button
          color="secondary"
          onPress={onOpen}
          startContent={
            <Flash size={20} width={""} height={""} fill={"#fff"} />
          }
        >
          {action}
        </Button>
      )}
      {type === "a" && (
        <a className=" cursor-pointer" onClick={onOpen}>
          {action}
        </a>
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={dismiss}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
