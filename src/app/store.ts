import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import orderSlice from "../store/slices/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice
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
