import {PersonalRecord} from '../app.models';

export interface State {
  isLoadingPersonalRecords: boolean;
  personalRecords: PersonalRecord[];
}

export const initialState: State = {
  isLoadingPersonalRecords: false,
  personalRecords: []
};
