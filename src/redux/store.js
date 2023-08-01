import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './botw/botwSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
