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
    <div className=" pt-20 p-4  text-textColor text-sm">
      <div className="flex flex-col gap-2">
        {searchValue && (
          <div className="bg-bgColor p-2 rounded-lg mr-auto">
            Search results: {searchValue}
          </div>
        )}
        {sortValue != "All" && (
          <div className="bg-bgColor p-2 rounded-lg mr-auto">
            Sort By: {sortValue}
          </div>
        )}
      </div>
      <div className="overflow-y-scroll custom-scrollbar pr-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4 max-w-screen-xl mx-auto mt-2  max-h-[calc(4*theme(space.32))] ">
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