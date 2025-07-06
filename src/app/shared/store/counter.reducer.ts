import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
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
  }) 


);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
