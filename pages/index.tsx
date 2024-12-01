import SearchBar from "@/components/SearchBar";
import TrainingCards from "@/components/TrainingCards";
import TrainingsContext from "@/context/trainingsContext";
import { useContext, useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("All");

  const { trainings } = useContext(TrainingsContext);
  console.log(trainings);
  return (
    <div className="mt-2 relative">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />

      {trainings && (
        <TrainingCards
          trainingCards={trainings}
          searchValue={searchValue}
          sortValue={sortValue}
        />
      )}
    </div>
  );
};

export default HomePage;
