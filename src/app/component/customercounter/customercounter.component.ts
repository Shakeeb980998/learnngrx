import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getchanale, getcounter } from '../../shared/store/counter.selecter';


@Component({
  selector: 'app-customercounter',
    standalone: true, 
  imports: [   MatButtonModule,MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule,FormsModule],
  templateUrl: './customercounter.component.html',
  styleUrls: ['./customercounter.component.css']
})
export class CustomercounterComponent  implements OnInit{

  constructor(private store:Store <{ counter:CounterModel}>    )    {

  }
  
  counterinput !:number;
  actiontype ='add';
   chanalname ='';
  countersubscribe !: Subscription;

  ngOnInit() : void{

   this.countersubscribe= this.store.select(getchanale).subscribe(data =>{
      this.chanalname=data;
      console.log('chanale');
    })

    // this.counster$ = this.store.select('counter');
  }



  onIncrement(){
    this.store.dispatch(customincrement({value: +this.counterinput,action:this.actiontype}))
  }
}
