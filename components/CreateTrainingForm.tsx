import { useContext, useState } from "react";
import ImageUpload from "./ImageUpload";
import TrainingsContext from "@/context/trainingsContext";
import { TrainingCardType } from "@/types/trainingCardType";
import ImagePreview from "./ImagePreview";
import InfoModalContext from "@/context/infoModalContext";
import { useRouter } from "next/router";

const CreateTrainingForm = () => {
  const [name, setName] = useState("");
const router = useRouter()
  const [description, setDescription] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  console.log("imageUrl", imageUrl);
  const { trainings, setTrainings } = useContext(TrainingsContext);
  const { setModalData } = useContext(InfoModalContext);
  console.log("trainings in create", trainings);
  const submitHandler = (e: any) => {
    e.preventDefault();

    if (!name || !description || !imageUrl) {
      console.log("here");
      setModalData({ isOpen: true, message: "Please fill all the fields" });
      return;
    }

    setTrainings((prevTrainings: TrainingCardType[]) => {
      return [
        ...prevTrainings,
        {
          id: `${name}-${description}`,
          name,
          description,
          createdOn: new Date(),
          imageUrl,
        },
      ];
    });
    router.push('/')
  };

  return (
    <form className="space-y-3 bg-bgColor p-4 sm:p-6 rounded-lg  border border-bgColor-dark max-w-md mx-auto opacity-95 text-textColor shadow-lg">
      <div className="">
        <label
          htmlFor="TrainingName"
          className="block text-base font-medium  mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="TrainingName"
          required
          className="w-full py-1.5 px-3 bg-bgColor-light border border-bgColor-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-bgColor-dark transition duration-150 ease-in-out"
          placeholder="Training name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="text-base font-medium">
        <label htmlFor="trainingDescription" className="block   mb-1">
          Description
        </label>
        <textarea
          id="trainingDescription"
          rows={3}
          className="w-full py-1.5 px-3 bg-bgColor-light border border-bgColor-light rounded-md text-white focus:outline-none focus:ring-2 focus:ring-bgColor-dark  transition duration-150 ease-in-out"
          placeholder="Describe your training"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      {imageUrl && <ImagePreview src={imageUrl} />}
      <div>
        <button
          type="submit"
          className="w-full py-1.5 border border-transparent rounded-md shadow-md  font-medium text-white transition duration-200 ease-in-out bg-bgColor-dark  hover:bg-bgColor-light focus:outline-none focus:ring-2 focus:ring-offset-2 text-base "
          onClick={submitHandler}
        >
          Create
        </button>
      </div>
    </form>
  );
};
export default CreateTrainingForm;
