import { createReducer, on } from '@ngrx/store';
import { changename, customincrement, decrement, increment, reset } from './counter.actions';
import { initialStae } from './counter.state';

const _counterReducer = createReducer(initialStae,
  on(increment, (State) => {
    return {
      ...State,
      counter: State.counter + 1,
    };
  }), 

  on(decrement, (State) => {
    return { 
      ...State,
      counter: State.counter - 1,
    };
  }),
  
   on(reset, (State) => {
    return { 
      ...State,
      counter: 0,
    };
  }),
  
   on(customincrement, (State,action) => {
    return { 
      ...State,
      counter:action.action=='add'?State.counter+action.value:State.counter-action.value
    };
  }) ,

   on(changename, (State,action) => {
    return { 
      ...State,
      chanalname:action.channel
    };
  }) 


);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
