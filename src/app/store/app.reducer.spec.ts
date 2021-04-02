import {State} from './app.state';
import { reducer as AppReducer } from './app.reducer';
import {
  AppActionTypes,
  loadPersonalRecords,
  loadPersonalRecordsFail,
  loadPersonalRecordsSuccess,
  setPersonalRecordChange, setPersonalRecordChangeFail, setPersonalRecordChangeSuccess
} from './app.actions';
import {PersonalRecord} from '../app.models';

describe('App Reducers', () => {
  let state: State;

  const personalRecords: PersonalRecord[] = [{
    id: 1,
    exercise: 'exercise1',
    records: {
      '3x12': 30
    }
  }];

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

    expect(AppReducer(state, loadPersonalRecordsSuccess({ personalRecords }))).toEqual({
      ...state,
      personalRecords,
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

  it(`should handle the '${AppActionTypes.SET_PERSONAL_RECORD_CHANGE}' action`, () => {
    expect(AppReducer(state, setPersonalRecordChange({ change: { exercise: 'exercise1', setsReps: '3x12', record: 30 } }))).toEqual({
      ...state,
      isLoadingPersonalRecords: true
    });
  });

  it(`should handle the '${AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS}' action`, () => {
    state = {
      ...state,
      isLoadingPersonalRecords: true,
      personalRecords: []
    };

    expect(AppReducer(state, setPersonalRecordChangeSuccess({ personalRecords }))).toEqual({
      ...state,
      personalRecords,
      isLoadingPersonalRecords: false
    });
  });

  it(`should handle the '${AppActionTypes.SET_PERSONAL_RECORD_CHANGE_FAIL}' action`, () => {
    state = {
      ...state,
      personalRecords,
      isLoadingPersonalRecords: true
    };

    expect(AppReducer(state, setPersonalRecordChangeFail())).toEqual({
      ...state,
      isLoadingPersonalRecords: false
    });
  });
});
