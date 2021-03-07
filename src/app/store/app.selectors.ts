import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './app.state';

export const selectAppState = createFeatureSelector<State>('app');

export const selectIsLoadingPersonalRecords = createSelector(selectAppState, state => state.isLoadingPersonalRecords);

export const selectPersonalRecords = createSelector(selectAppState, state => state.personalRecords);
