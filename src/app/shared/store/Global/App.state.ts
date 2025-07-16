import { blogReducer } from '../Blog/Blog.reducer';
import { counterReducer } from '../counter.reducer';

export const AppState = {
  blog: blogReducer,
  counter: counterReducer
};
