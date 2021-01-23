import {State} from './app.state';
import { reducer as AppReducer } from './app.reducer';
import {AppActionTypes, loadData, loadDataFail, loadDataSuccess} from './app.actions';

describe('App Reducers', () => {
  let state: State;

  beforeEach(() => {
    state = {
      isLoadingData: false
    };
  });

  it(`should handle the '${AppActionTypes.LOAD_DATA}' action`, () => {
    expect(AppReducer(state, loadData())).toEqual({
      ...state,
      isLoadingData: true
    });
  });

  it(`should handle the '${AppActionTypes.LOAD_DATA_SUCCESS}' action`, () => {
    state = {
      ...state,
      isLoadingData: true
    };

    expect(AppReducer(state, loadDataSuccess({ data: 'data' }))).toEqual({
      ...state,
      isLoadingData: false
    });
  });

  it(`should handle the '${AppActionTypes.LOAD_DATA_FAIL}' action`, () => {
    state = {
      ...state,
      isLoadingData: true
    };

    expect(AppReducer(state, loadDataFail())).toEqual({
      ...state,
      isLoadingData: false
    });
  });
});
