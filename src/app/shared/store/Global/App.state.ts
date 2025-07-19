import { blogReducer } from '../Blog/Blog.reducer';
import { counterReducer } from '../counter.reducer';
import { AppReducer } from './app.Reducer';

export const AppState = {
  blog: blogReducer,
  counter: counterReducer,
  app:AppReducer
};
