import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { customizationSlice } from './slices/customizationSlice';

export const store = configureStore({
  reducer: {
    customization: customizationSlice.reducer
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