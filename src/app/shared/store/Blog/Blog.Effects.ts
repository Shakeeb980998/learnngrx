import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Master } from '../../master';
import { addblog, addblogsuccess, LOAD_BLOG, loadblogfail, loadblogsuccess,ADD_BLOG } from './Blog.actions';
import { catchError, EMPTY, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class BlogEffects {
  _blog;
  _AddBlog;

  constructor(private actions$: Actions, private service: Master) {

    this._blog = createEffect(() =>
      this.actions$.pipe(
        ofType(LOAD_BLOG),
        exhaustMap(() =>
          this.service.GetAllBlogs().pipe(
            map(data => loadblogsuccess({ bloglist: data })),
            catchError((_error) => of(loadblogfail({ Errortext: _error })))
          )
        )
      )
    );

    this._AddBlog = createEffect(() =>
      this.actions$.pipe(
        ofType(addblog),
        exhaustMap(action => {
          return this.service.CreateBlogs(action.bloginput).pipe(
            map((data) => {
              return addblogsuccess({ bloginput: action.bloginput });
            }),
            catchError((_error) => of(loadblogfail({ Errortext: _error })))
          );
        })
      )
    );
  }
}

