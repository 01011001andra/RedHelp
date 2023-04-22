import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./Features/dark/darkMode";
import newsSlice from "./Features/news/newsSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
    darkMode: darkModeSlice,
  },
});

export default store;
