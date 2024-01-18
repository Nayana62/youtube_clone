import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isWatchMenuOpen: false,
    isChatBoxOpen: true,
  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    openWatchMenu: (state) => {
      state.isWatchMenuOpen = true;
    },
    closeWatchMenu: (state) => {
      state.isWatchMenuOpen = false;
    },
    toggleWatchMenu: (state) => {
      state.isWatchMenuOpen = !state.isWatchMenuOpen;
    },
    toggleChatBox: (state) => {
      state.isChatBoxOpen = !state.isChatBoxOpen;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  openWatchMenu,
  closeWatchMenu,
  toggleWatchMenu,
  toggleChatBox,
} = appSlice.actions;

export default appSlice.reducer;
