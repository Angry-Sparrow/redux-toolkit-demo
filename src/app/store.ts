import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fiveReducer from '../features/five/fiveSlice';

// 这里帮我combine了所有的store
// 复杂的项目应该分多层
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    five: fiveReducer
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
