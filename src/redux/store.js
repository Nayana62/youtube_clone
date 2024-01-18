import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheReducer from "./cacheSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import scrollSlice from "./scrollSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cache: cacheReducer,
    search: searchReducer,
    chat: chatReducer,
    scroll: scrollSlice,
  },
});

export default store;
