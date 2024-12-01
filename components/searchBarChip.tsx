import { Dispatch, SetStateAction } from "react";

type SearchBarChipProps = {
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  setSearchValue?: Dispatch<SetStateAction<string>>;
  searchRef?: React.RefObject<HTMLInputElement>;
};

const SearchBarChip = ({
  label,
  selected,
  setSelected,
  setSearchValue,
  searchRef,
}: SearchBarChipProps) => {
  return (
    <div
      className={`px-4 py-2 cursor-pointer text-white rounded-md bg-bgColor hover:bg-bgColor-dark transition-colors duration-200  ${
        selected === label ? "bg-bgColor-dark" : ""
      }`}
      onClick={() => {
        setSelected(label);
        if (label === "All") {
          setSearchValue!("");
          if (searchRef?.current?.value) {
            searchRef.current.value = "";
          }
        }
      }}
    >
      {label}
    </div>
  );
};

export default SearchBarChip;
