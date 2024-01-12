import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isWatchMenuOpen: false,
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
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  openWatchMenu,
  closeWatchMenu,
  toggleWatchMenu,
} = appSlice.actions;

export default appSlice.reducer;
