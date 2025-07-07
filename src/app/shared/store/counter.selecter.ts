import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";
import { state } from "@angular/animations";

const getcounterstate =  createFeatureSelector<CounterModel>('counter')

export const getcounter = createSelector(getcounterstate,(state) => {
    return state.counter;
})

export const getchanale = createSelector(getcounterstate,(state) => {
    return state.chanalname;
})