import botwReducer from '../redux/botw/botwSlice';
import { setClickedCardId } from '../redux/botw/botwSlice';

describe('botwSlice reducer', () => {

  it('should return the initial state', () => {
    expect(botwReducer(undefined, {})).toEqual({
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
    });
  });

  it('should handle setClickedCardId', () => {
    const newState = botwReducer(undefined, setClickedCardId('123'));
    expect(newState.clickedCardId).toEqual('123');
  });
});
