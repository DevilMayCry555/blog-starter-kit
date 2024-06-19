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

interface Props {
  action: string;
  title: string;
  children: React.ReactNode;
}
export default function BaseModal({
  action = "--",
  title = "--",
  children,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} className=" m-2">
        {action}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
