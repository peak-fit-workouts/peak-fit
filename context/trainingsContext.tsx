import { TrainingCardType } from "@/types/trainingCardType";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type TrainingsContextType = {
  trainings: TrainingCardType[];
  setTrainings: Dispatch<SetStateAction<TrainingCardType[]>>;
};

const initialState: TrainingsContextType = {
  trainings: [],
  setTrainings: () => {},
};

const TrainingsContext = createContext<TrainingsContextType>(initialState);

export const TrainingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [trainings, setTrainings] = useState<TrainingCardType[]>([]);

  return (
    <TrainingsContext.Provider value={{ trainings, setTrainings }}>
      {children}
    </TrainingsContext.Provider>
  );
};

export default TrainingsContext;
