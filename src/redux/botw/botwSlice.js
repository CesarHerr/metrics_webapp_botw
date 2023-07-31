import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlAll } from '../../components/Api';

const initialState = {
  isLoading: false,
  cards: [],
  error: undefined,
};

const fetchInfo = createAsyncThunk('cards/fetchInfo', async () => {
  try {
    const response = await axios.get(urlAll);
    return response.data;
  } catch (error) {
    throw error.response;
  }
});

const botwSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
        state.error = undefined;
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchInfo };
export default botwSlice.reducer;
