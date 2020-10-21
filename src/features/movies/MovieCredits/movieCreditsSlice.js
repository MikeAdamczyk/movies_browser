import {createSlice} from "@reduxjs/toolkit";

export const movieCreditsSlice = createSlice({
    name: "movieCredits",
    initialState: {
        isLoading: false,
        movie_id: undefined,
        cast: [],
        crew: [],
    },
    reducers: {
        fetchMovieCredits: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchMovieCreditsSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.movie_id = payload.id;
            state.cast = payload.cast;
            state.crew = payload.crew;
        },
        fetchMovieCreditsError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchMovieCredits,
    fetchMovieCreditsSuccess,
    fetchMovieCreditsError,
} = movieCreditsSlice.actions;

export const selectMovieCast = (state) => state.movieCredits.cast;
export const selectMovieCrew = (state) => state.movieCredits.crew;

export default movieCreditsSlice.reducer;