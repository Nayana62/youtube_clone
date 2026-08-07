import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",

  initialState: {
    videos: [],
    channels: {},
    activeSuggestion: "All",
  },

  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },

    setActiveSuggestion: (state, action) => {
      state.activeSuggestion = action.payload;
    },

    addVideosList: (state, action) => {
      state.videos = [...state.videos, ...action.payload.items];
    },

    addChannels: (state, action) => {
      action.payload.forEach((channel) => {
        state.channels[channel.id] = channel;
      });
    },
  },
});

export const { addVideosList, addChannels, setVideos, setActiveSuggestion } =
  scrollSlice.actions;

export default scrollSlice.reducer;
