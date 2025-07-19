import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Master } from '../../master';
import {
  catchError,
  EMPTY,
  exhaustMap,
  map,
  of,
  pipe,
  from,
  switchMap,
} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmptyAction, ShowAlert } from '../Global/App.Actions';

@Injectable()
export class AppEffect {
  private _showAlert: any;

  constructor(private actions$: Actions, private _snackbar: MatSnackBar) {
    this._showAlert = createEffect(() =>
      this.actions$.pipe(
        ofType(ShowAlert),
        exhaustMap((action) => {
          const snackbarRef = this.ShowsnackbarAlert(
            action.message,
            action.actionreslt
          );
          return from(snackbarRef.afterDismissed()).pipe(
            map(() => EmptyAction())
          );
        })
      )
    );
  }
  ShowsnackbarAlert(message: string, actionreslt: string = 'fail') {
    let _class = actionreslt == 'pass' ? 'green-snackbar' : 'red-snackbar';
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [_class],
      duration: 2000,
    });
  }
}
