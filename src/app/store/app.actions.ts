import {createAction, props} from '@ngrx/store';

export enum AppActionTypes {
  LOAD_DATA = '[App] Load Data',
  LOAD_DATA_SUCCESS = '[App] Load Data Success',
  LOAD_DATA_FAIL = '[App] Load Data Fail'
}

export const loadData = createAction(AppActionTypes.LOAD_DATA);

export const loadDataSuccess = createAction(AppActionTypes.LOAD_DATA_SUCCESS, props<{ data: string }>());

export const loadDataFail = createAction(AppActionTypes.LOAD_DATA_FAIL);
