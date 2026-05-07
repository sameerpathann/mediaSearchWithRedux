import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "Photos",
    results: {
      Photos: {},
      Videos: {},
    },
    currentResult: [],

    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setResults: (state, action) => {
      let { query, activeTab, data } = action.payload;
      state.results[activeTab][query] = data;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setCurrentResult: (state, action) => {
      state.currentResult = action.payload;
    },
    clearResult: (state, action) => {
      state.results = {
        Photos: {},
        Videos: {},
      };

      state.currentResult = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setResults,
  setLoading,
  setError,
  clearResult,
  setCurrentResult,
} = searchSlice.actions;

export default searchSlice.reducer;
