import { createSlice } from "@reduxjs/toolkit";

const defineInitialState = () => ({
  darkMode: false,
});

const themeSlice = createSlice({
  name: "Theme",
  initialState: defineInitialState(),
  reducers: {
    setMode: (state, action) => {
      state.darkMode = action.payload.darkMode;
    },
  },
});

export const { setMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
