import * as appActions from './app.actions';

describe('App Actions', () => {
  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS}' action`, () => {
    expect(appActions.loadPersonalRecords()).toEqual({ type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS });
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS}' action`, () => {
    expect(appActions.loadPersonalRecordsSuccess({ personalRecords: [] })).toEqual({
      type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS,
      personalRecords: []
    });
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL}' action`, () => {
    expect(appActions.loadPersonalRecordsFail()).toEqual({ type: appActions.AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL });
  });
});
