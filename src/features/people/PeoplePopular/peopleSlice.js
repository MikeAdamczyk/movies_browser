import {createSlice} from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        isLoading: false,
        currentPage: 1,
        totalPages: 1,
        totalResults: 0,
        results: [],
    },
    reducers: {
        fetchPeople: (state) => {
            state.isLoading = true;
        },
        fetchPeopleSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
            state.results = payload.results;
        },
        fetchPeopleError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
} = peopleSlice.actions;

export const selectPeople = (state) => state.people.results;

export default peopleSlice.reducer;

