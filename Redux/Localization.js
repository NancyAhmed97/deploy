import { createSlice } from "@reduxjs/toolkit";
import { en } from "../utils/English";
import { ar } from "../utils/Arabic";
import { tr } from "../utils/Turkish";
export const localizationSlice = createSlice({
  name: "localization",
  initialState: {
    currentLocal: en,
  },
  reducers: {
    changeLocal: (state, action) => {
      state.currentLocal =
        action.payload === "en" ? en : action.payload === "ar" ? ar : tr;
    },
  },
});
export const { changeLocal } = localizationSlice.actions;

export default localizationSlice.reducer;
