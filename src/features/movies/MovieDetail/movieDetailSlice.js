import {createSlice} from "@reduxjs/toolkit";

export const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState: {
        isLoading: false,
        results: [],
    },
    reducers: {
        fetchMovieDetail: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchMovieDetailSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.results = payload;
        },
        fetchMovieDetailError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchMovieDetail,
    fetchMovieDetailSuccess,
    fetchMovieDetailError,
} = movieDetailSlice.actions;

export const selectMovieDetail = (state) => state.movieDetail.results;
export const selectLoading = (state) => state.movieDetail.isLoading;
export const selectProductionCountries = (state) => state.movieDetail.results.production_countries;

export default movieDetailSlice.reducer;