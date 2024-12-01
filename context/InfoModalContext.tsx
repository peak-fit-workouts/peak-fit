import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type ModalData = {
  isOpen: boolean;
  message: string;
};

type InfoModalContextProviderProps = {
  children: ReactNode;
};

type InfoModalContextType = {
  modalData: ModalData;
  setModalData: Dispatch<SetStateAction<ModalData>>;
};

const InfoModalContext = createContext<InfoModalContextType>({
  modalData: {
    isOpen: false,
    message: "",
  },
  setModalData: () => {},
});

export const InfoModalContextProvider = ({
  children,
}: InfoModalContextProviderProps) => {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    message: "",
  });
  console.log("modalData", modalData);
  return (
    <InfoModalContext.Provider value={{ modalData, setModalData }}>
      {children}
    </InfoModalContext.Provider>
  );
};

export default InfoModalContext;
