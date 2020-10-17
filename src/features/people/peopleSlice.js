import {createSlice} from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        isLoading: false,
        currentPage: 1,
        totalPages: 1,
        totalResults: 0,
        results: [],
        isSearchLoading: false,
    },
    reducers: {
        fetchPeople: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchPeopleByQuery: (state, {payload}) => {
            state.isSearchLoading = true;
        },
        fetchDifferentPageSearchedPeople: (state, {payload}) => {
            state.isSearchLoading = true;
        },
        fetchPeopleSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.isSearchLoading = false;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
            state.results = payload.results;
        },
        fetchPeopleError: (state) => {
            state.isLoading = false;
            state.isSearchLoading = false;
        },
        setPeopleNextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage = state.currentPage + 1;
            }
            return;
        },
        setPeopleLastPage: (state) => {
            state.currentPage = state.totalPages;
        },
        setPeoplePreviousPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage = state.currentPage - 1;
            }
            return;
        },
        setPeopleFirstPage: (state) => {
            state.currentPage = 1;
        },
    },
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    fetchPeopleByQuery,
    fetchDifferentPageSearchedPeople,
    setPeopleFirstPage,
    setPeopleLastPage,
    setPeopleNextPage,
    setPeoplePreviousPage
} = peopleSlice.actions;

export const selectPeople = (state) => state.people.results;
export const selectTotalResults = (state) => state.people.totalResults;
export const selectLoadingStatus = (state) => state.people.isSearchLoading;
export const selectPeopleCurrentPage = (state) => state.people.currentPage;
export const selectPeopleTotalPages = (state) => state.people.totalPages;

export default peopleSlice.reducer;

