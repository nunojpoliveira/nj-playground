import {State} from './app.state';
import { reducer as AppReducer } from './app.reducer';
import {AppActionTypes, loadPersonalRecords, loadPersonalRecordsFail, loadPersonalRecordsSuccess} from './app.actions';

describe('App Reducers', () => {
  let state: State;

  beforeEach(() => {
    state = {
      isLoadingPersonalRecords: false,
      personalRecords: []
    };
  });

  it(`should handle the '${AppActionTypes.LOAD_PERSONAL_RECORDS}' action`, () => {
    expect(AppReducer(state, loadPersonalRecords())).toEqual({
      ...state,
      isLoadingPersonalRecords: true
    });
  });

  it(`should handle the '${AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS}' action`, () => {
    state = {
      ...state,
      isLoadingPersonalRecords: true,
      personalRecords: []
    };

    expect(AppReducer(state, loadPersonalRecordsSuccess({ personalRecords: [] }))).toEqual({
      ...state,
      isLoadingPersonalRecords: false
    });
  });

  it(`should handle the '${AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL}' action`, () => {
    state = {
      ...state,
      isLoadingPersonalRecords: true
    };

    expect(AppReducer(state, loadPersonalRecordsFail())).toEqual({
      ...state,
      isLoadingPersonalRecords: false
    });
  });
});
