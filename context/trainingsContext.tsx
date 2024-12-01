import { TrainingCardType } from "@/types/trainingCardType";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type TrainingsContextType = {
  trainings: TrainingCardType[];
  setTrainings: Dispatch<SetStateAction<TrainingCardType[]>>;
};

const initialState = {
  trainings: [],
  setTrainings: () => {},
};

const TrainingsContext = createContext<TrainingsContextType>(initialState);

export const TrainingsContextProvider = ({ children }: { children: any }) => {
  const [trainings, setTrainings] = useState<TrainingCardType[]>([]);

  return (
    <TrainingsContext.Provider value={{ trainings, setTrainings }}>
      {children}
    </TrainingsContext.Provider>
  );
};

export default TrainingsContext;
