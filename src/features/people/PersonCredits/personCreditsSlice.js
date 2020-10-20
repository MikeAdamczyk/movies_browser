import {createSlice} from "@reduxjs/toolkit";

export const personCreditsSlice = createSlice({
    name: "personCredits",
    initialState: {
        isLoading: false,
        cast: [],
        crew: [],
        person_id: undefined,
    },
    reducers: {
        fetchPersonCredits: (state) => {
            state.isLoading = true;
        },
        fetchPersonCreditsSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.cast = payload.cast;
            state.crew = payload.crew;
            state.person_id = payload.id;
        },
        fetchPersonCreditsError: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    fetchPersonCredits,
    fetchPersonCreditsSuccess,
    fetchPersonCreditsError,
} = personCreditsSlice.actions;

export const selectPersonCast = (state) => state.personCredits.cast;
export const selectPersonCrew = (state) => state.personCredits.crew;

export default personCreditsSlice.reducer;

