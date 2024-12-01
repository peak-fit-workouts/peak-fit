import InfoModalContext from "@/context/TrainingCardModalContext";
import { displaySmartDate, formatSimpleDate } from "@/utils/helpers";
import { ModalContent } from "@nextui-org/react";
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
  const { setModalData } = useContext(InfoModalContext);

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
      className="mx-auto bg-greyBackground rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 border-bgColor-dark hover:border-2 hover:border-blue-200"
      onClick={onClickHandler}
    >
      <div className="h-full flex flex-col max-w-sm mx-auto bg-bgColor rounded-lg shadow-lg overflow-hidden">
        <div className="h-[8rem]">
          <Image
            className="object-cover mb-auto h-full w-full"
            src={image}
            alt="Card Image"
            height={100}
            width={100}
          />
        </div>
        <div className="h-[8rem] flex flex-col gap-1 pt-2 text-lg px-2 py-2">
          <h2 className="font-semibold text-textColor">{name}</h2>
          <p className=" text-white text-base">
            Created: {displaySmartDate(createdAt, formatSimpleDate)}
          </p>
          <p className=" text-white text-base">
            {description.length < 20
              ? description
              : `${description.slice(0, 20)}...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
