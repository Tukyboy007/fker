import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedMarkerData: [],
  isModalOpen: false,
  testLayer: null,
};

const slice = createSlice({
  name: "generalMoment/state",
  initialState,
  reducers: {
    setClickedMarkerData: (state, { payload }) => {
      state.clickedMarkerData = payload;
    },
    setIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    setTestLayer: (state, { payload }) => {
      state.testLayer = payload;
    },
  },
});

export const { setClickedMarkerData, setIsModalOpen, setTestLayer } =
  slice.actions;

export default slice.reducer;
