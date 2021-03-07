import {AppActionTypes, loadPersonalRecordsSuccess, loadPersonalRecords} from './app.actions';
import { hot } from 'jasmine-marbles';
import {AppEffects} from './app.effects';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {PersonalRecord} from '../app.models';

describe('App Effects', () => {
  const personalRecordsMock: PersonalRecord[] = [
    {
      id: 1,
      exercise: 'exercise1',
      records: {
        '3x12': 50,
        '5x5': 75
      }
    },
    {
      id: 1,
      exercise: 'exercise2',
      records: {
        '3x12': 50
      }
    }
  ];

  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: jasmine.createSpy().and.returnValue(of(personalRecordsMock))
          }
        }
      ]
    });
    httpClient = TestBed.inject(HttpClient);
  });
  describe('loadPersonalRecords$', () => {
    it(`should dispatch a ${AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS} action`, () => {
      const action$ = hot('-a', { a: loadPersonalRecords() });

      expect(new AppEffects(action$, httpClient).loadPersonalRecords$).toBeObservable(hot('-a', {
        a: loadPersonalRecordsSuccess({ personalRecords: personalRecordsMock })
      }));
    });
  });
});
