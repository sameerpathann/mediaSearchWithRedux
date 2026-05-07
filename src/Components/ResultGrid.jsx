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
import ResultCard from "./ResultCard";
import Loader from "../Anim/Loader";
import Message from "../Anim/Message";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, currentResult, results, loading, error } =
    useSelector((state) => state.search);

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));
      if (results[activeTab]?.[query]) {
        dispatch(setCurrentResult(results[activeTab]?.[query]));
        dispatch(setLoading(false));
        return;
      }
      try {
        let response;
        let data;

        if (activeTab === "Photos") {
          response = await fetchImages(query);
          dispatch(setLoading(false));
          data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab === "Videos") {
          response = await fetchVideos(query);
          dispatch(setLoading(false));
          data = response.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        }

        if (!data.length) {
          dispatch(setError("No Results Found"));
          return;
        }

        dispatch(setResults({ query, activeTab, data }));
        dispatch(setCurrentResult(data));
      } catch (error) {
        dispatch(setError("Something went wrong"));
      }
    };

    if (query) {
      getData();
    }
  }, [query, activeTab]);
  return (
    <div className="flex items-center flex-wrap justify-center gap-5">
      {query.trim() === "" ? (
        <Message message="Please Enter Something..." />
      ) : loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        currentResult.map((item) => <ResultCard key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ResultGrid;
