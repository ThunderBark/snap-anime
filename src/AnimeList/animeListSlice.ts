import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export interface AnimeListState {
  status: "idle" | "loading" | "failed";
  value: number;
}

const initialState: AnimeListState = {
  status: "idle",
  value: 0,
};

export const animeListSlice = createSlice({
  name: "animeList",
  initialState,
  reducers: {},
});

export const {} = animeListSlice.actions;

export default animeListSlice.reducer;