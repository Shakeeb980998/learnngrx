import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  standalone: true, 
  imports: [],
  templateUrl: './counterbutton.html',
  styleUrls: ['./counterbutton.css']
})
export class Counterbutton {

  constructor(private store:Store<{counter:{counter:number}}>){

  }

  onIncrement(){
    this.store.dispatch(increment())
  }

   onDecrement(){
      this.store.dispatch(decrement())
  }

   onReset(){
      this.store.dispatch(reset())
  }

}
