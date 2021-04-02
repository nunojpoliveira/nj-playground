import {createAction, props} from '@ngrx/store';
import {PersonalRecord, PersonalRecordChange} from '../app.models';

export enum AppActionTypes {
  LOAD_PERSONAL_RECORDS = '[App] Load Personal Records',
  LOAD_PERSONAL_RECORDS_SUCCESS = '[App] Load Personal Records Success',
  LOAD_PERSONAL_RECORDS_FAIL = '[App] Load Personal Records Fail',
  SET_PERSONAL_RECORD_CHANGE = '[App] Set Personal Record Change',
  SET_PERSONAL_RECORD_CHANGE_SUCCESS = '[App] Set Personal Record Change Success',
  SET_PERSONAL_RECORD_CHANGE_FAIL = '[App] Set Personal Record Change Fail'
}

export const loadPersonalRecords = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS);

export const loadPersonalRecordsSuccess = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS, props<{ personalRecords: PersonalRecord[] }>());

export const loadPersonalRecordsFail = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL);

export const setPersonalRecordChange = createAction(AppActionTypes.SET_PERSONAL_RECORD_CHANGE, props<{ change: PersonalRecordChange }>());

export const setPersonalRecordChangeSuccess = createAction(AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS, props<{ personalRecords: PersonalRecord[] }>());

export const setPersonalRecordChangeFail = createAction(AppActionTypes.SET_PERSONAL_RECORD_CHANGE_FAIL);
