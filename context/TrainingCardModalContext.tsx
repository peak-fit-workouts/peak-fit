import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export type ModalData = {
  isOpen: boolean;
  title: string;
  description: string;
  createdOn: Date;
  imageUrl: string;
};

type TrainingCardModalContextProviderProps = {
  children: ReactNode;
};

type TrainingCardModalContextType = {
  modalData: ModalData;
  setModalData: Dispatch<SetStateAction<ModalData>>;
};

const TrainingCardModalContext = createContext<TrainingCardModalContextType>({
  modalData: {
    isOpen: false,
    title: "",
    description: "",
    createdOn: new Date(),
    imageUrl: "",
  },
  setModalData: () => {},
});

export const TrainingCardModalContextProvider = ({
  children,
}: TrainingCardModalContextProviderProps) => {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    title: "",
    description: "",
    createdOn: new Date(),
    imageUrl: "",
  });

  return (
    <TrainingCardModalContext.Provider value={{ modalData, setModalData }}>
      {children}
    </TrainingCardModalContext.Provider>
  );
};

export default TrainingCardModalContext;
