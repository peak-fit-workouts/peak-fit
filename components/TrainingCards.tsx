import { TrainingCardType } from "@/types/trainingCardType";
import TrainingCard from "./TrainingCard";

type TrainingCardsProps = {
  trainingCards: TrainingCardType[];
  searchValue: string;
  sortValue: string;
};

const TrainingCards = ({
  trainingCards,
  searchValue,
  sortValue,
}: TrainingCardsProps) => {
  return (
    <div className="flex flex-col h-full p-4 text-textColor text-sm bg-gradient-to-b from-bgColor-light via-bgColor to-bgColor-dark">
      <div className="flex flex-col gap-2 mb-4">
        {searchValue && (
          <div className="bg-bgColor-light p-2 rounded-lg mr-auto shadow-md">
            Search results: {searchValue}
          </div>
        )}
        {sortValue != "All" && (
          <div className="bg-bgColor-light p-2 rounded-lg mr-auto shadow-md">
            Sort By: {sortValue}
          </div>
        )}
      </div>
      <div className="flex-grow overflow-y-scroll custom-scrollbar pr-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto">
          {trainingCards.map((card) => (
            <TrainingCard
              key={card.id}
              name={card.name}
              description={card.description}
              image={card.imageUrl}
              createdAt={card.createdOn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingCards;
