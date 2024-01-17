import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date(); // Get the current date

const initialState = {
  rotate: 0,
  clickedMarker: null,
  click: false,
  successResponses: [],
  ids: [],
  tsaguudUrl: [],
  url: null,
  dateStart: currentDate.toISOString().slice(0, 10).replace(/-/g, ""), // Format as 'yyyymmdd'
  dateEnd: currentDate.toISOString().slice(0, 10).replace(/-/g, ""), // Format as 'yyyymmdd'
};

const slice = createSlice({
  name: "sidebar/state",
  initialState,
  reducers: {
    setRotate: (state, { payload }) => {
      state.rotate = payload;
    },
    setClickedMarker: (state, { payload }) => {
      state.clickedMarker = payload;
    },
    setClick: (state, { payload }) => {
      state.click = payload;
    },
    addSuccessResponse: (state, { payload }) => {
      state.successResponses.push(payload);
    },
    setIds: (state, { payload }) => {
      state.ids.push(payload);
    },
    clearIds: (state) => {
      state.ids = [];
    },
    setUrl: (state, { payload }) => {
      state.url = payload;
    },
    setTsaguudUrl: (state, { payload }) => {
      state.tsaguudUrl.push(payload);
    },
    removeTsaguudUrl: (state, { payload }) => {
      const updatedArray = state.tsaguudUrl.filter(
        (item) => item.pageUrl !== payload
      );
      state.tsaguudUrl = updatedArray;
    },
    setDateStart: (state, { payload }) => {
      state.dateStart = payload;
    },
    setDateEnd: (state, { payload }) => {
      state.dateEnd = payload;
    },
  },
});

export const {
  setRotate,
  setClickedMarker,
  setClick,
  addSuccessResponse,
  setIds,
  clearIds,
  setTsaguudUrl,
  removeTsaguudUrl,
  setUrl,
  setDateStart,
  setDateEnd,
} = slice.actions;

export default slice.reducer;
