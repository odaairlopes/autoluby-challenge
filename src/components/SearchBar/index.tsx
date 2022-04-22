import { InputHTMLAttributes, useState } from "react";
import { FiSearch } from "react-icons/fi";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  handleSearch?: (value: string) => Promise<void>;
};

const SearchBar = ({ handleSearch, width, ...props }: InputProps) => {
  const [value, setValue] = useState("");
  // const

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
