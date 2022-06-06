import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import imageInputReducer from '../ImageInput/imageInputSlice';
import animeListReducer from '../AnimeList/animeListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imageInput: imageInputReducer,
    animeList: animeListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
