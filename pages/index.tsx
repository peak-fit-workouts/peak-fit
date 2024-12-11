
import SearchBar from "@/components/SearchBar";
import TrainingCards from "@/components/TrainingCards";
import { useState, useEffect, useContext } from "react";
import TrainingsContext from "@/context/trainingsContext";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trainings");
  const initialTrainings = await res.json();
  return { props: { initialTrainings } };
}

const HomePage = ({ initialTrainings }: { initialTrainings: any[] }) => {
  const { trainings, setTrainings } = useContext(TrainingsContext);

  useEffect(() => {
    
    setTrainings(initialTrainings.map(t => ({ ...t, createdOn: new Date(t.createdOn) })));
  }, [initialTrainings, setTrainings]);

  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("All");
  const [selectedTrainingType, setSelectedTrainingType] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [dateSortOrder, setDateSortOrder] = useState<string>("newest");

  let filteredTrainings = trainings.filter((t) => {
    const matchesSearch = searchValue
      ? t.name.toLowerCase().includes(searchValue.toLowerCase()) || t.description.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    const matchesType = selectedTrainingType ? t.trainingType === selectedTrainingType : true;
    const matchesPrice = t.price >= minPrice && t.price <= maxPrice;

    return matchesSearch && matchesType && matchesPrice;
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
        selectedLevel=""
        setSelectedLevel={() => {}}
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
