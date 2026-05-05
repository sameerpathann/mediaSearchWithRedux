import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setQuery } from "../Redux/Slices/searchSlice";
const SearchBar = () => {
  const [userQuery, setUserQuery] = useState("");
  const dispatch = useDispatch();
  const Error = useSelector((state) => state.search.error);
  const formHandeller = (e) => {
    e.preventDefault();
    if (userQuery.trim() !== "" && userQuery.length >= 3) {
      dispatch(setQuery(userQuery));
      setUserQuery("");
      dispatch(setError(null));
    } else {
      dispatch(
        setError("Please Enter Something or Enter More then 3 characters"),
      );
    }
  };

  return (
    <div className="">
      <form className="flex flex-col gap-4" onSubmit={(e) => formHandeller(e)}>
        <div className="flex items-center gap-4">
          <input
            required
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="border md:border-2 outline-none placeholder:text-white w-full py-2 md:py-3 rounded px-3 text-xl"
            type="text"
            placeholder="Please Enter Anything"
          />
          <button className="border-2 outline-none active:scale-95 rounded cursor-pointer py-2 md:py-3 px-3 md:px-6 md:text-xl">
            Search
          </button>
        </div>
        <div className="flex items-center h-[25px] ">
          <small
            className={`text-red-500 font-semibold md:text-lg transition-opacity duration-75 opacity-0 ease-linear   ${Error ? `opacity-100` : ""}`}
          >
            {Error}
          </small>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
