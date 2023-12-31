import botwReducer, { setClickedCardId } from '../redux/botw/botwSlice';

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
      isCardDetailsVisible: false,
      isCardListVisible: false,
      isImageVisible: false,
    });
  });

  it('should handle setClickedCardId', () => {
    const newState = botwReducer(undefined, setClickedCardId('123'));
    expect(newState.clickedCardId).toEqual('123');
  });
});
