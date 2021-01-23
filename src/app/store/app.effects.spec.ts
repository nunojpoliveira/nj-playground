import {AppActionTypes, loadData, loadDataSuccess} from './app.actions';
import { hot } from 'jasmine-marbles';
import {AppEffects} from './app.effects';

describe('App Effects', () => {
  describe('loadData$', () => {
    it(`should dispatch a ${AppActionTypes.LOAD_DATA_SUCCESS} action`, () => {
      const action$ = hot('-a', { a: loadData() });

      expect(new AppEffects(action$).loadData$).toBeObservable(hot('-a', {
        a: loadDataSuccess({ data: 'data' })
      }));
    });
  });
});
