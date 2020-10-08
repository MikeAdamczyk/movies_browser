import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    results: [],
  },
  reducers: {},
});

export default moviesSlice.reducer;
