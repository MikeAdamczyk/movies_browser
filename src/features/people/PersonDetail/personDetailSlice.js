import {createSlice} from "@reduxjs/toolkit";

export const personDetailSlice = createSlice({
    name: "personDetail",
    initialState: {
        isLoading: false,
        isError: false,
        results: [],
    },
    reducers: {
        fetchPersonDetail: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchPersonDetailSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.isError = false;
            state.results = payload;
        },
        fetchPersonDetailError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export const {
    fetchPersonDetail,
    fetchPersonDetailSuccess,
    fetchPersonDetailError,
} = personDetailSlice.actions;

export const selectPersonDetail = (state) => state.personDetail.results;
export const selectPersonIsError = (state) => state.personDetail.isError;
export const selectPersonIsLoading = (state) => state.personDetail.isLoading;

export default personDetailSlice.reducer;

