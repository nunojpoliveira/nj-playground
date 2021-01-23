import {Action, createReducer, on} from '@ngrx/store';
import {loadData, loadDataFail, loadDataSuccess} from './app.actions';
import {initialState, State} from './app.state';

const appReducer = createReducer(
  initialState,
  on(loadData, state => ({
    ...state,
    isLoadingData: true
  })),
  on(loadDataSuccess, state => ({
    ...state,
    isLoadingData: false
  })),
  on(loadDataFail, state => ({
    ...state,
    isLoadingData: false
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return appReducer(state, action);
}
