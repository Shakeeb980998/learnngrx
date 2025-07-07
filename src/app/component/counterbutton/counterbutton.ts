import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changename, decrement, increment, reset } from '../../shared/store/counter.actions';
import { MatButtonModule } from '@angular/material/button';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  standalone: true, 
  imports: [
    MatButtonModule
  ],
  templateUrl: './counterbutton.html',
  styleUrls: ['./counterbutton.css']
})
export class Counterbutton {

  constructor(private store:Store<{counter:CounterModel}>){

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

  onRename(){
    this.store.dispatch(changename({channel:'welcome to shakeeb'}))
  }

}
