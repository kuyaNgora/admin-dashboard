import { createSlice } from "@reduxjs/toolkit";
import * as Action from "./action";

const defineInitialState = () => ({
  data: {},
});

export const tableSlice = createSlice({
  name: Action.MODULE,
  initialState: defineInitialState(),
  reducers: {
    initialize: (state, action) => {
      state.data = {
        ...state.data,
        [action?.payload?.name]: action?.payload?.table,
      };
    },
  },
});

export const { initialize } = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
