import {createSlice} from "@reduxjs/toolkit";

export const personDetailSlice = createSlice({
    name: "personDetail",
    initialState: {
        isLoading: false,
        results: [],
    },
    reducers: {
        fetchPersonDetail: (state, {payload}) => {
            state.isLoading = true;
        },
        fetchPersonDetailSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.results = payload;
        },
        fetchPersonDetailError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchPersonDetail,
    fetchPersonDetailSuccess,
    fetchPersonDetailError,
} = personDetailSlice.actions;

export const selectPersonDetail = (state) => state.personDetail.results;

export default personDetailSlice.reducer;

