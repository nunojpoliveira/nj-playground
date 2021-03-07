import {createAction, props} from '@ngrx/store';
import {PersonalRecord} from '../app.models';

export enum AppActionTypes {
  LOAD_PERSONAL_RECORDS = '[App] Load Personal Records',
  LOAD_PERSONAL_RECORDS_SUCCESS = '[App] Load Personal Records Success',
  LOAD_PERSONAL_RECORDS_FAIL = '[App] Load Personal Records Fail'
}

export const loadPersonalRecords = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS);

export const loadPersonalRecordsSuccess = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS, props<{ personalRecords: PersonalRecord[] }>());

export const loadPersonalRecordsFail = createAction(AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL);
