import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppActionTypes} from './app.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PersonalRecord} from '../app.models';

@Injectable()
export class AppEffects {

  loadPersonalRecords$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LOAD_PERSONAL_RECORDS),
    mergeMap(() => this.httpClient.get<PersonalRecord[]>('/api/personalrecords')
      .pipe(
        map(personalRecords => ({ type: AppActionTypes.LOAD_PERSONAL_RECORDS_SUCCESS, personalRecords })),
        catchError(error => of({ type: AppActionTypes.LOAD_PERSONAL_RECORDS_FAIL }))
      ))
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
