import TrainingCardModalContext from "@/context/TrainingCardModalContext";
import { displaySmartDate, formatSimpleDate } from "@/utils/helpers";
import Image from "next/image";
import { useContext } from "react";

type TrainingCardProps = {
  name: string;
  description: string;
  image: string;
  logo?: string;
  createdAt: Date;
};

const TrainingCard = ({
  name,
  image,
  description,
  createdAt,
}: TrainingCardProps) => {
  const { setModalData } = useContext(TrainingCardModalContext);

  const onClickHandler = () => {
    setModalData({
      isOpen: true,
      title: name,
      description,
      imageUrl: image,
      createdOn: createdAt,
    });
  };

  return (
    <div
      className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-200"
      onClick={onClickHandler}
    >
      <div className="flex flex-col bg-white rounded-lg shadow-inner">
        <div className="h-[8rem] relative">
          <Image
            className="object-cover h-full w-full"
            src={image}
            alt="Card Image"
            height={100}
            width={100}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white">
            <h2 className="font-semibold text-white text-lg">{name}</h2>
          </div>
        </div>
        <div className="p-4 text-gray-700">
          <p className="text-sm mb-1">
            Created: {displaySmartDate(createdAt, formatSimpleDate)}
          </p>
          <p className="text-sm">
            {description.length < 20 ? description : `${description.slice(0, 20)}...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
