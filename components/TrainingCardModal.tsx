import InfoModalContext from "@/context/TrainingCardModalContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useContext } from "react";

const TrainingCardModal = () => {
  const { modalData, setModalData } = useContext(InfoModalContext);

  return (
    <Modal
      isOpen={modalData.isOpen}
      onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))} // Close modal on dismiss
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton={true}
      className="border-2 border-bgColor-dark bg-bgColor text-white"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              {modalData.title}
            </ModalHeader>
            <ModalBody className="text-center">
              {modalData.description}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() =>
                  setModalData((prev) => ({ ...prev, isOpen: false }))
                }
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TrainingCardModal;
