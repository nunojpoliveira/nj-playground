import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppActionTypes} from './app.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AppEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LOAD_DATA),
    mergeMap(() => of('data')
      .pipe(
        map(data => ({ type: AppActionTypes.LOAD_DATA_SUCCESS, data })),
        catchError(error => of({ type: AppActionTypes.LOAD_DATA_FAIL }))
      ))
  ));

  constructor(private actions$: Actions) {}
}
