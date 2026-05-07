import React, { useEffect } from "react";
import {
  setError,
  setLoading,
  setQuery,
  setResults,
  setCurrentResult,
} from "../Redux/Slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, fetchVideos } from "../api/mediaApi";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, currentResult, results, loading, error } =
    useSelector((state) => state.search);

  useEffect(() => {
    const getData = async () => {
      if (results[activeTab]?.[query]) {
        dispatch(setCurrentResult(results[activeTab]?.[query]));
        return;
      }
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));

        let response;
        let data;

        if (activeTab === "Photos") {
          response = await fetchImages(query);
          data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        } else if (activeTab === "Videos") {
          response = await fetchVideos(query);

          data = response.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
          }));
        }

        if (!response.length) {
          dispatch(setError("No Results Found"));
          return;
        }

        dispatch(setResults({ query, activeTab, data }));
        dispatch(setCurrentResult(data));
      } catch (error) {
        dispatch(setError("Something went wrong"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (query) {
      getData();
    }
  }, [query, activeTab]);

  return <div></div>;
};

export default ResultGrid;
