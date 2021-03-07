import {State} from './app.state';
import {selectAppState, selectIsLoadingPersonalRecords, selectPersonalRecords} from './app.selectors';
import {PersonalRecord} from '../app.models';

const deadliftRecord: PersonalRecord = {
  id: 1,
  exercise: 'Deadlift',
  records: {
    '3x12': 50,
    '5x5': 75
  }
};

const state = {
  ['app']: {
    isLoadingPersonalRecords: false,
    personalRecords: [deadliftRecord]
  } as State
};

describe('App Selectors', () => {
  describe('selectAppState selector', () => {
    it('should select all state', () => {
      expect(selectAppState(state)).toEqual({ isLoadingPersonalRecords: false, personalRecords: [deadliftRecord] } as State);
    });
  });

  describe('selectIsLoadingPersonalRecords selector', () => {
    it(`should select 'isLoadingPersonalRecords'`, () => {
      expect(selectIsLoadingPersonalRecords(state)).toEqual(false);
    });
  });

  describe('selectPersonalRecords selector', () => {
    it(`should select 'personalRecords'`, () => {
      expect(selectPersonalRecords(state)).toEqual([deadliftRecord]);
    });
  });
});
