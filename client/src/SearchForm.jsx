import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ input, setInput, handleSubmit, setErrorMsg }) => {
  const [loading, setLoading] = useState(true);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center pb-2 px-3">
        <div className="flex w-80 sm:w-96 mx-10 rounded bg-white">
          <input
            name="vin"
            type="search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setErrorMsg("");
            }}
            className="w-full bg-transparent mx-4 my-1 text-black outline-none"
            placeholder="Enter VIN..."
          />
          <button
            type="submit"
            className="m-1 rounded bg-blue-600 px-4 py-2 text-white"
          >
            <FaSearch size={34} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
