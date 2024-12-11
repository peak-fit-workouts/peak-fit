import { useContext, useState } from "react";
import ImageUpload from "./ImageUpload";
import TrainingsContext from "@/context/trainingsContext";
import { TrainingCardType } from "@/types/trainingCardType";
import ImagePreview from "./ImagePreview";
import InfoModalContext from "@/context/infoModalContext";
import { useRouter } from "next/router";

const CreateTrainingForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [trainingType, setTrainingType] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const trainingTypes = [
    "All",
    "Strength Training",
    "HIIT",
    "Cardio",
    "Yoga",
    "Pilates",
    "Functional Training",
    "CrossFit",
    "Calisthenics",
    "Free-Weight Training",
    "Machine-Based",
    "Circuit Training",
    "Plyometric Training",
    "Tai Chi",
    "Kickboxing Aerobics",
    "Zumba",
    "Spinning",
    "Stretching",
    "Barre",
    "Martial Arts",
    "Swimming",
    "Other",
  ];

  const router = useRouter();
  const { trainings, setTrainings } = useContext(TrainingsContext);
  const { setModalData } = useContext(InfoModalContext);

  const existingTypes = Array.from(new Set(trainings.map((t) => t.trainingType)));
  const allTypes = Array.from(new Set([...trainingTypes, ...existingTypes]));

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (!name || !description || !imageUrl || !trainingType || !level || price <= 0) {
      setModalData({ isOpen: true, message: "Please fill all the fields and price > 0" });
      return;
    }

    setTrainings((prevTrainings: TrainingCardType[]) => [
      ...prevTrainings,
      {
        id: `${name}-${description}`,
        name,
        description,
        createdOn: new Date(),
        imageUrl,
        price,
        trainingType,
        level,
      },
    ]);

    router.push("/");
  };

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl space-y-6">
      <div>
        <label htmlFor="TrainingName" className="block text-sm font-semibold text-slate-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="TrainingName"
          required
          className="w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          placeholder="Training name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="trainingDescription" className="block text-sm font-semibold text-slate-700 mb-2">
          Description
        </label>
        <textarea
          id="trainingDescription"
          rows={3}
          className="w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          placeholder="Describe your training"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="trainingPrice" className="block text-sm font-semibold text-slate-700 mb-2">Price</label>
        <input
          type="number"
          id="trainingPrice"
          required
          min={1}
          className="w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="trainingType" className="block text-sm font-semibold text-slate-700 mb-2">
          Training Type
        </label>
        <select
          id="trainingType"
          required
          className="w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
        >
          <option value="">Select a type</option>
          {allTypes.map((type) => (
            <option key={type} value={type === "All" ? "" : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="trainingLevel" className="block text-sm font-semibold text-slate-700 mb-2">
          Level
        </label>
        <select
          id="trainingLevel"
          required
          className="w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">All</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>

      <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      {imageUrl && <ImagePreview src={imageUrl} />}

      <div>
        <button
          type="submit"
          className="w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          onClick={submitHandler}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateTrainingForm;
