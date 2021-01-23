import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './app.state';

export const selectAppState = createFeatureSelector<State>('app');

export const selectIsLoadingData = createSelector(selectAppState, state => state.isLoadingData);
