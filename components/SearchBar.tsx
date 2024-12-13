import { Dispatch, SetStateAction, useRef } from "react";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
  selectedTrainingType: string;
  setSelectedTrainingType: Dispatch<SetStateAction<string>>;
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  dateSortOrder: string;
  setDateSortOrder: Dispatch<SetStateAction<string>>;
  selectedLevel: string;
  setSelectedLevel: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({
  searchValue,
  setSearchValue,
  sortValue,
  setSortValue,
  selectedTrainingType,
  setSelectedTrainingType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  dateSortOrder,
  setDateSortOrder,
  selectedLevel,
  setSelectedLevel,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    const val = inputRef?.current?.value ? inputRef.current.value : "";
    setSearchValue(val);
  };

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

  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="w-full px-6 py-4 bg-gradient-to-r from-bgColor-light via-bgColor to-bgColor-dark border border-slate-200 rounded-xl shadow-md flex flex-wrap gap-4 items-center">
      {/* Search Field */}
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-150 ease-in-out"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
        />
        <button
          className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition duration-150 ease-in-out"
          onClick={searchHandler}
        >
          Search
        </button>
        {searchValue && (
          <button
            className="py-2 px-4 bg-white border border-red-400 text-red-500 font-semibold rounded-md hover:bg-red-100 transition duration-150 ease-in-out"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
              setSearchValue("");
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Training Type Filter */}
      <div className="flex items-center gap-2">
        <label className="font-semibold text-sm text-slate-800">Type:</label>
        <select
          value={selectedTrainingType}
          onChange={(e) => setSelectedTrainingType(e.target.value)}
          className="py-2 px-3 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm"
        >
          {trainingTypes.map((type) => (
            <option key={type} value={type === "All" ? "" : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Level Filter */}
      <div className="flex items-center gap-2">
        <label className="font-semibold text-sm text-slate-800">Level:</label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="py-2 px-3 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm"
        >
          <option value="">All</option>
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="flex items-center gap-2">
        <label className="font-semibold text-sm text-slate-800 whitespace-nowrap">
          Price: {minPrice} - {maxPrice}
        </label>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center text-xs">
            <span>Min: {minPrice}</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={minPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val <= maxPrice) setMinPrice(val);
              }}
              className="w-24 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center text-xs">
            <span>Max: {maxPrice}</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= minPrice) setMaxPrice(val);
              }}
              className="w-24 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Date Sort Order */}
      <div className="flex items-center gap-2">
        <label className="font-semibold text-sm text-slate-800">Date:</label>
        <select
          value={dateSortOrder}
          onChange={(e) => setDateSortOrder(e.target.value)}
          className="py-2 px-3 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
