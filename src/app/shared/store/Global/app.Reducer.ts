import { createReducer,on } from "@ngrx/store";
import { Globalstate } from "./Global.state";
import { loadspiner } from "./App.Actions";





const _AppReducer = createReducer(Globalstate,
  on(loadspiner, (State,action) => {
    return {
       ...State,
       isloaded:action.isloaded
    }
  }),
);

export function AppReducer(state: any, action: any) {
  return _AppReducer(state, action);
}


