import {Action, createReducer, on} from '@ngrx/store';
import {loadPersonalRecords, loadPersonalRecordsFail, loadPersonalRecordsSuccess} from './app.actions';
import {initialState, State} from './app.state';

const appReducer = createReducer(
  initialState,
  on(loadPersonalRecords, state => ({
    ...state,
    isLoadingPersonalRecords: true
  })),
  on(loadPersonalRecordsSuccess, (state, { personalRecords }) => ({
    ...state,
    personalRecords,
    isLoadingPersonalRecords: false
  })),
  on(loadPersonalRecordsFail, state => ({
    ...state,
    isLoadingPersonalRecords: false
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return appReducer(state, action);
}
