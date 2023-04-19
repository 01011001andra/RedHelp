import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  news: [],
  error: "",
};

export const fetchNews = createAsyncThunk("news/fetchNews", () => {
  return axios
    .get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = "";
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.payload;
    });
  },
});

export default newsSlice.reducer;
