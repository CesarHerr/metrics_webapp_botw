import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMaterials,
  fetchCreature,
  fetchEquipment,
  fetchDetail,
  fetchMonsters,
  fetchTreasures,
} from './Api';

const initialState = {
  isLoading: false,
  cards: [],
  creatures: [],
  equipment: [],
  materials: [],
  monsters: [],
  detail: [],
  treasures: [],
  clickedCardId: null,
  error: undefined,
  isCardDetailsVisible: false,
};

const botwSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setClickedCardId: (state, action) => {
      state.clickedCardId = action.payload;
    },
    showCardDetails: (state) => {
      state.isCardDetailsVisible = true;
    },
    hideCardDetails: (state) => {
      state.isCardDetailsVisible = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterials.fulfilled, (state, action) => {
        state.materials = action.payload;
      })
      .addCase(fetchCreature.fulfilled, (state, action) => {
        state.creatures = action.payload;
      })
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.equipment = action.payload;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.monsters = action.payload;
      })
      .addCase(fetchTreasures.fulfilled, (state, action) => {
        state.treasures = action.payload;
      })
      .addMatcher(
        (action) => [fetchMaterials.pending, fetchCreature.pending, fetchEquipment.pending,
          fetchDetail.pending, fetchMonsters.pending, fetchTreasures.pending].includes(action.type),
        (state) => {
          state.isLoading = true;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => [fetchMaterials.fulfilled, fetchCreature.fulfilled, fetchEquipment.fulfilled,
          fetchDetail.fulfilled, fetchMonsters.fulfilled,
          fetchTreasures.fulfilled].includes(action.type),
        (state) => {
          state.isLoading = false;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => [fetchMaterials.rejected, fetchCreature.rejected, fetchEquipment.rejected,
          fetchDetail.rejected, fetchMonsters.rejected,
          fetchTreasures.rejected].includes(action.type),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        },
      );
  },
});

export const { setClickedCardId, showCardDetails, hideCardDetails } = botwSlice.actions;
export default botwSlice.reducer;
