import * as appActions from './app.actions';
import {PersonalRecordChange} from '../app.models';

describe('App Actions', () => {
  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS}' action`, () => {
    expect(appActions.loadPersonalRecords()).toEqual({type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS});
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS}' action`, () => {
    expect(appActions.loadPersonalRecordsSuccess({personalRecords: []})).toEqual({
      type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS,
      personalRecords: []
    });
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL}' action`, () => {
    expect(appActions.loadPersonalRecordsFail()).toEqual({type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL});
  });

  it(`should create the '${appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE}' action`, () => {
    const change: PersonalRecordChange = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 30
    };
    expect(appActions.setPersonalRecordChange({change})).toEqual({type: appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE, change});
  });

  it(`should create the '${appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS}' action`, () => {
    expect(appActions.setPersonalRecordChangeSuccess({personalRecords: []})).toEqual({
      type: appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS,
      personalRecords: []
    });
  });

  it(`should create the '${appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE_FAIL}' action`, () => {
    expect(appActions.setPersonalRecordChangeFail()).toEqual({type: appActions.AppActionTypes.SET_PERSONAL_RECORD_CHANGE_FAIL});
  });
});
