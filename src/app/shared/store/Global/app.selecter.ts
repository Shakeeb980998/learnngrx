import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "./AppState.model";
import { loadspiner } from "./App.Actions";


const getblogstate =  createFeatureSelector<AppStateModel>('app')

export const getspinerstate = createSelector(getblogstate,(state) => {
    return state.isloaded;
})

