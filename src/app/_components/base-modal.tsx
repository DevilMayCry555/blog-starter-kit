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
  children: React.ReactNode;
}
export default function BaseModal({
  action = "--",
  title = "--",
  children,
  type = "modal",
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

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
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
