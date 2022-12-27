import { configureStore } from '@reduxjs/toolkit';
import { blogSlice } from './data/blogFeatures/blogSlice';
import { authSlice } from './data/authFeatures/authSlice';

export const store = configureStore({
  reducer: {
    data: blogSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
