import SearchBar from "@/components/SearchBar";
import TrainingCards from "@/components/TrainingCards";
import TrainingsContext from "@/context/trainingsContext";
import { useContext, useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("All");
  const [selectedTrainingType, setSelectedTrainingType] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [dateSortOrder, setDateSortOrder] = useState<string>("newest");
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const { trainings } = useContext(TrainingsContext);

  let filteredTrainings = trainings.filter((t) => {
    const matchesSearch = searchValue
      ? t.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        t.description.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    const matchesType = selectedTrainingType
      ? t.trainingType === selectedTrainingType
      : true;
    const matchesPrice = t.price >= minPrice && t.price <= maxPrice;
    const matchesLevel = selectedLevel ? t.level === selectedLevel : true;

    return matchesSearch && matchesType && matchesPrice && matchesLevel;
  });

  filteredTrainings = filteredTrainings.sort((a, b) => {
    if (dateSortOrder === "newest") {
      return b.createdOn.getTime() - a.createdOn.getTime();
    } else {
      return a.createdOn.getTime() - b.createdOn.getTime();
    }
  });

  return (
    <div className="mt-2 relative">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
        selectedTrainingType={selectedTrainingType}
        setSelectedTrainingType={setSelectedTrainingType}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        dateSortOrder={dateSortOrder}
        setDateSortOrder={setDateSortOrder}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      {filteredTrainings && (
        <TrainingCards
          trainingCards={filteredTrainings}
          searchValue={searchValue}
          sortValue={sortValue}
        />
      )}
    </div>
  );
};

export default HomePage;
