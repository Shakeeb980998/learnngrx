import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Master } from '../../master';
import {
  addblog,
  addblogsuccess,
  LOAD_BLOG,
  loadblogfail,
  loadblogsuccess,
  ADD_BLOG,
  updateblog,
  delteblog,
  deleteblogsuccess,
  updateblogsuccess,
} from './Blog.actions';
import { catchError, EMPTY, exhaustMap, map, of, pipe, from, switchMap } from 'rxjs';
import { BlogModel } from './Blog.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmptyAction, loadspiner, ShowAlert } from '../Global/App.Actions';

@Injectable()
export class BlogEffects {
  _blog;
  _AddBlog;
  _UpdateBlog;
  _DeleteBlog;
  private _showAlert: any;

  constructor(
    private actions$: Actions,
    private service: Master,
    private _snackbar: MatSnackBar
  ) {
    this._blog = createEffect(() =>
      this.actions$.pipe(
        ofType(LOAD_BLOG),
        exhaustMap(() =>
          this.service.GetAllBlogs().pipe(
            map((data) => loadblogsuccess({ bloglist: data })),
            catchError((_error) => of(loadblogfail({ Errortext: _error }), loadspiner({isloaded:false})))
          )
        )
      )
    );

    this._AddBlog = createEffect(() =>
      this.actions$.pipe(
        ofType(addblog),
        switchMap(action => 
            this.service.CreateBlogs(action.bloginput).pipe(
            switchMap(data => of(
              addblogsuccess({ bloginput: data as BlogModel }),
              loadspiner({isloaded:false}),
              ShowAlert({ message: 'Create success',actionreslt:'pass' })
            )),
            catchError((_error) => of(ShowAlert({message:'Create failesd - Due to '+_error.message , actionreslt:'fail'}), loadspiner({isloaded:false})))
          )
        )
      )
    );

    this._UpdateBlog = createEffect(() =>
      this.actions$.pipe(
        ofType(updateblog),
        switchMap(action => 
           this.service.UpdateBlogs(action.bloginput).pipe(
            switchMap(res => of(
              updateblogsuccess({ bloginput: action.bloginput }),
                loadspiner({isloaded:false}),
              ShowAlert({ message: 'updated success',actionreslt:'pass' })
            )),
            catchError((_error) => of(ShowAlert({message:'upadte failesd - Due to '+_error.message , actionreslt:'fail'}), loadspiner({isloaded:false})))
        )
      )
    )
  );

    this._DeleteBlog = createEffect(() =>
      this.actions$.pipe(
        ofType(delteblog),
        switchMap(action => 
           this.service.DeleteBlogs(action.id).pipe(
            switchMap(res => of(
               deleteblogsuccess({ id: action.id }),
                 loadspiner({isloaded:false}),
               ShowAlert({ message: 'Delete success',actionreslt:'pass' })
            )),
           catchError((_error) => of(ShowAlert({message:'Delete failesd - Due to '+_error.message , actionreslt:'fail'}), loadspiner({isloaded:false})))
          )
        )
      )
    );
  }
}
