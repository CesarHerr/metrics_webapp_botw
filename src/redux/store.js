import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './botw/botwSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
