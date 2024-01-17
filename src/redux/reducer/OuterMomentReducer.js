import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  markerData: {
    markerCoordinate: null,
    markerType: null,
    type: null,
  },
  db_name: "",
};

const slice = createSlice({
  name: "outerMoment/state",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setMarkerData: (state, { payload }) => {
      state.markerData = payload;
    },
    setDb_name: (state, { payload }) => {
      state.db_name = payload;
    },
  },
});

export const { setData, setMarkerData, setDb_name } = slice.actions;

export default slice.reducer;
