import React from "react";
import { fetchImages, fetchVideos } from "./api/mediaApi";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="bg-gray-950 md:py-8 md:px-10 py-4 px-5 text-white">
      <SearchBar />
    </div>
  );
};

export default App;
