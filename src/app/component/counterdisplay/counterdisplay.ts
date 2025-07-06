import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  standalone: true, 
  imports: [],
  templateUrl: './counterdisplay.html',
  styleUrls: ['./counterdisplay.css']
})
export class Counterdisplay {

  constructor(private store:Store<{counter:{counter:number}}>){

  }

  counterdisplay !: number;

  ngOnInit() : void{

    this.store.select('counter').subscribe(data =>{
      this.counterdisplay = data.counter;
    })

  }

}
