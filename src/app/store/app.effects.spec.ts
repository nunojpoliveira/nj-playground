import {
  AppActionTypes,
  loadPersonalRecordsSuccess,
  loadPersonalRecords,
  setPersonalRecordChange,
  setPersonalRecordChangeSuccess
} from './app.actions';
import { hot } from 'jasmine-marbles';
import {AppEffects} from './app.effects';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {PersonalRecord, PersonalRecordChange} from '../app.models';

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
            get: jasmine.createSpy().and.returnValue(of(personalRecordsMock)),
            post: jasmine.createSpy().and.returnValue(of(personalRecordsMock))
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

  describe('setPersonalRecordChange$', () => {
    it(`should dispatch a ${AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS} action`, () => {
      const change: PersonalRecordChange = {
        exercise: 'exercise1',
        setsReps: '3x12',
        record: 30
      };
      const action$ = hot('-a', { a: setPersonalRecordChange({ change }) });

      expect(new AppEffects(action$, httpClient).setPersonalRecordChange$).toBeObservable(hot('-a', {
        a: setPersonalRecordChangeSuccess({ personalRecords: personalRecordsMock })
      }));
    });
  });
});
