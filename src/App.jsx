import React from "react";
import { fetchImages, fetchVideos } from "./api/mediaApi";
import SearchBar from "./Components/SearchBar";
import Tabs from "./Components/Tabs";
import ResultGrid from "./Components/ResultGrid";

const App = () => {
  return (
    <div className="bg-gray-950 md:py-8 md:px-10 py-4 px-5 text-white flex flex-col gap-4">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
