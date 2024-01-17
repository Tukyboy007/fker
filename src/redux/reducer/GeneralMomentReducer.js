import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  markerData: {
    markerCoordinate: null,
    markerType: null,
    type: null,
  },
  db_name: null,
  label: null,
};

const slice = createSlice({
  name: "generalMoment/state",
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
    setLabel: (state, { payload }) => {
      state.label = payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { setData, setMarkerData, setDb_name, setLabel, clearData } =
  slice.actions;

export default slice.reducer;
