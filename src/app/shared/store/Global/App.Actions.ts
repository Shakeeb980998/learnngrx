import { createAction, props } from "@ngrx/store"

export const SHOW_ALERT = '[app event] show alert'
export const EMPTY_ACTION = '[app event] empty'
export const LOAD_SPINER = '[blog page]Load blog';


export const ShowAlert = createAction(SHOW_ALERT,props<{message:string,actionreslt:string}>());

export const EmptyAction = createAction(EMPTY_ACTION);


export const loadspiner = createAction(LOAD_SPINER, props<{ isloaded: boolean }>());