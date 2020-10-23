import { createSlice } from "@reduxjs/toolkit";

export const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState: {
    isLoading: false,
    isError: false,
    cast: [],
    crew: [],
    person_id: undefined,
  },
  reducers: {
    fetchPersonCredits: (state, {payload}) => {
      state.isLoading = true;
    },
    fetchPersonCreditsSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.isError = false;
      state.cast = payload.cast;
      state.crew = payload.crew;
      state.person_id = payload.id;
    },
    fetchPersonCreditsError: (state) => {
      state.isLoading = false;
      state.isError = true;
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
export const selectIsPersonCreditsLoading = (state) => state.personCredits.isLoading;
export const selectIsPersonCreditsError = (state) => state.personCredits.isError;

export default personCreditsSlice.reducer;

