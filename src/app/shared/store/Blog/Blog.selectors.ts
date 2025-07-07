import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { BlogModel } from "./Blog.model";

const getblogstate =  createFeatureSelector<BlogModel[]>('blog')

export const getblog = createSelector(getblogstate,(state) => {
    return state;
})