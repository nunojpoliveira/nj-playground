import * as appActions from './app.actions';

describe('App Actions', () => {
  it(`should create the '${appActions.AppActionTypes.LOAD_DATA}' action`, () => {
    expect(appActions.loadData()).toEqual({ type: appActions.AppActionTypes.LOAD_DATA });
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_DATA_SUCCESS}' action`, () => {
    expect(appActions.loadDataSuccess({ data: 'data' })).toEqual({
      type: appActions.AppActionTypes.LOAD_DATA_SUCCESS,
      data: 'data'
    });
  });

  it(`should create the '${appActions.AppActionTypes.LOAD_DATA_FAIL}' action`, () => {
    expect(appActions.loadDataFail()).toEqual({ type: appActions.AppActionTypes.LOAD_DATA_FAIL });
  });
});
