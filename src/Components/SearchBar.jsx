import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setQuery } from "../Redux/Slices/searchSlice";
const SearchBar = () => {
  const [userQuery, setUserQuery] = useState("");
  const dispatch = useDispatch();
  const formHandeller = (e) => {
    e.preventDefault();
    if (userQuery.trim() !== "" && userQuery.length >= 3) {
      dispatch(setQuery(userQuery));
      setUserQuery("");
    } else {
      dispatch(
        setError("Please Enter Something or Enter More then 3 characters"),
      );
    }
  };

  return (
    <div>
      <form onSubmit={(e) => formHandeller(e)}>
        <div className="flex items-center gap-4">
          <input
            required
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="border md:border-2 outline-none placeholder:text-white w-full py-2 rounded px-3 text-xl"
            type="text"
            placeholder="Please Enter Anything"
          />
          <button className="border-2 outline-none active:scale-95 rounded cursor-pointer py-2 px-3 md:px-6 md:text-xl">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
