import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppActionTypes, setPersonalRecordChange} from './app.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PersonalRecord, PersonalRecordChange} from '../app.models';

const personalRecordsUrl = '/api/personalrecords';

@Injectable()
export class AppEffects {

  loadPersonalRecords$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LOAD_PERSONAL_RECORDS),
    mergeMap(() => this.httpClient.get<PersonalRecord[]>(personalRecordsUrl)
      .pipe(
        map(personalRecords => ({ type: AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS, personalRecords })),
        catchError(error => of({ type: AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL }))
      ))
  ));

  setPersonalRecordChange$ = createEffect(() => this.actions$.pipe(
    ofType(setPersonalRecordChange),
    mergeMap(action => this.httpClient.post<PersonalRecordChange>(personalRecordsUrl, action.change)
      .pipe(
        map(personalRecords => ({ type: AppActionTypes.SET_PERSONAL_RECORD_CHANGE_SUCCESS, personalRecords })),
        catchError(error => of({ type: AppActionTypes.SET_PERSONAL_RECORD_CHANGE_FAIL }))
      ))
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
