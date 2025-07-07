import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getcounter } from '../../shared/store/counter.selecter';
import { AppStateModel } from '../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counterdisplay',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './counterdisplay.html',
  styleUrls: ['./counterdisplay.css']
})
export class Counterdisplay implements OnInit, OnDestroy{

  constructor(private store:Store<AppStateModel>){

  }

  counterdisplay !: number;
  countersubscribe !: Subscription;
  counster$ !: Observable<CounterModel>;


  ngOnInit() : void{

   this.countersubscribe= this.store.select(getcounter).subscribe(data =>{
      this.counterdisplay = data;
      console.log('counter');
    })

    // this.counster$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe();
    }
  }


}
