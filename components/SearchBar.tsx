import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import SearchBarChip from "./searchBarChip";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({
  searchValue,
  setSearchValue,
  sortValue,
  setSortValue,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    const val = inputRef?.current?.value ? inputRef?.current.value : "";
    setSearchValue(val);
  };

  return (
    <div className="flex flex-col items-center justify-center text-textColor text-xs mt-10">
      <div className="flex gap-1 justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-3/4 h-12 px-4 bg-bgColor rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 border border-bgColor-dark hover:border hover:border-blue-200"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
        />
        <button
          className="bg-bgColor rounded-lg flex justify-center items-center p-3 hover:bg-blue-200 hover:text-gray-900 duration-300"
          onClick={searchHandler}
        >
          <MagnifyingGlassCircleIcon className="h-6 w-6 " />
        </button>
        {searchValue && (
          <button
            className="bg-bgColor text-red-500 rounded-lg flex justify-center items-center p-3 hover:bg-red-500 hover:text-gray-900 duration-300"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
              setSearchValue("");
            }}
          >
            <XCircleIcon className="h-6 w-6 " />
          </button>
        )}
      </div>
      <div className="flex gap-5 pt-3 ">
        <SearchBarChip
          label="All"
          selected={sortValue}
          setSelected={setSortValue}
          setSearchValue={setSearchValue}
          searchRef={inputRef}
        />
        <SearchBarChip
          label="Featured"
          selected={sortValue}
          setSelected={setSortValue}
        />
        <SearchBarChip
          label="Trending"
          selected={sortValue}
          setSelected={setSortValue}
        />
        <SearchBarChip
          label="Market cap"
          selected={sortValue}
          setSelected={setSortValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;
