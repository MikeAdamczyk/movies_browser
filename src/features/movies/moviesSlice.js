import {createSlice} from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        currentPage: 1,
        totalPages: 1,
        totalResults: 0,
        results: [],
    },
    reducers: {
        fetchMovie: (state) => {
            state.isLoading = true;
        },
        fetchMovieSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
            state.results = payload.results;
        },
        fetchMovieError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
} = moviesSlice.actions;

export const selectMovie = (state) => state.movies.results;
export const selectCurrentPage = (state) => state.movies.currentPage;
export const selectTotalPages = (state) => state.movies.totalPages;

export const getSearchedMovies = (state, query) => {
    const movies = selectMovie(state);
    if (!query || query.trim() === "") {
        return movies;
    }
    return movies.filter(({title}) =>
        title.toUpperCase().includes(query.trim().toUpperCase())
    );
}

export default moviesSlice.reducer;

