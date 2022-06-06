import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export interface ImageInputState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: ImageInputState = {
  value: 0,
  status: "idle",
};

export const imageInputSlice = createSlice({
  name: "imageInput",
  initialState,
  reducers: {},
});

export const {} = imageInputSlice.actions;

export default imageInputSlice.reducer;
