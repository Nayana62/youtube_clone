import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideosList: (state, action) => {
      //   state.videos.splice(0, 10);
      state.videos = [...state.videos, ...action.payload.items];
    },
  },
});

export const { addVideosList } = scrollSlice.actions;

export default scrollSlice.reducer;
