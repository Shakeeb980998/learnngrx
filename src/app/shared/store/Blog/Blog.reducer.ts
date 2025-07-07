import { createReducer,on } from "@ngrx/store";
import { Blogstate } from "./Blog.state";
import { loadblog } from "./Blog.actions";




const _BlogReducer = createReducer(Blogstate,
  on(loadblog, (State) => {
    return {
      ...State
    };
  })
);

export function BlogReducer(state: any, action: any) {
  return _BlogReducer(state, action);
}

