import {State} from './app.state';
import {selectAppState, selectIsLoadingData} from './app.selectors';

const state = {
  ['app']: {
    isLoadingData: false
  } as State
};

describe('App Selectors', () => {
  describe('selectAppState selector', () => {
    it('should select all state', () => {
      expect(selectAppState(state)).toEqual({ isLoadingData: false });
    });
  });

  describe('selectIsLoadingData selector', () => {
    it(`should select 'isLoadingData'`, () => {
      expect(selectIsLoadingData(state)).toEqual(false);
    });
  });
});
