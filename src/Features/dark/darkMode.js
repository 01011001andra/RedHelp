import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: localStorage.getItem("buttonClicked"),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    clickButton: (state) => {
      state.isClicked = true;
      localStorage.setItem("buttonClicked", true);
    },
    resetButton: (state) => {
      state.isClicked = false;
      localStorage.removeItem("buttonClicked");
    },
  },
});

export const { clickButton, resetButton } = darkModeSlice.actions;
export default darkModeSlice.reducer;
