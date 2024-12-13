import { useState, useContext } from "react";
import ImageUpload from "./ImageUpload";
import { useRouter } from "next/router";
import ImagePreview from "./ImagePreview";
import InfoModalContext from "@/context/infoModalContext";

const CreateTrainingForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState<number>(20);
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
  const { setModalData } = useContext(InfoModalContext);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (!name || !description || !imageUrl || !trainingType || !level || price <= 0) {
      setModalData({ isOpen: true, message: "Моля, попълнете всички полета и уверете се, че цената е по-голяма от 0." });
      return;
    }

    try {
      const response = await fetch("/api/trainings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, imageUrl, price, trainingType, level }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setModalData({ isOpen: true, message: error || "Грешка при създаване на тренировка." });
        return;
      }

      router.push("/");
    } catch (error) {
      console.error(error);
      setModalData({ isOpen: true, message: "Неуспешно създаване на тренировка." });
    }
  };

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-xl shadow-md space-y-6" onSubmit={submitHandler}>
      <div>
        <label htmlFor="TrainingName" className="block text-sm font-semibold text-gray-800 mb-2">
          Name
        </label>
        <input
          type="text"
          id="TrainingName"
          required
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
          placeholder="Training name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="trainingDescription" className="block text-sm font-semibold text-gray-800 mb-2">
          Description
        </label>
        <textarea
          id="trainingDescription"
          rows={3}
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
          placeholder="Describe your training"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="trainingPrice" className="block text-sm font-semibold text-gray-800 mb-2">
          Price
        </label>
        <input
          type="number"
          id="trainingPrice"
          required
          min={1}
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="trainingType" className="block text-sm font-semibold text-gray-800 mb-2">
          Training Type
        </label>
        <select
          id="trainingType"
          required
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
        >
          <option value="">Select a type</option>
          {trainingTypes.map((type) => (
            <option key={type} value={type === "All" ? "Other" : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="trainingLevel" className="block text-sm font-semibold text-gray-800 mb-2">
          Level
        </label>
        <select
          id="trainingLevel"
          required
          className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
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
          className="w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateTrainingForm;
