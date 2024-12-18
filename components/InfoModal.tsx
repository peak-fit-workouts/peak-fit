import InfoModalContext from "@/context/InfoModalContext";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";

const InfoModal = () => {
  const { modalData, setModalData } = useContext(InfoModalContext);

  return (
    <Modal
      isOpen={modalData.isOpen}
      onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton={true}
      className="border-2 border-bgColor-dark bg-bgColor text-white"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="text-center text-xl">
              {modalData.message}
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

export default InfoModal;
