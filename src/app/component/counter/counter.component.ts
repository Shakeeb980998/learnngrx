import { Component } from '@angular/core';
import { Counterbutton } from '../counterbutton/counterbutton';
import { Counterdisplay } from '../counterdisplay/counterdisplay';
import { CustomercounterComponent } from '../customercounter/customercounter.component';

@Component({
  selector: 'app-counter',
  imports: [Counterbutton,Counterdisplay,CustomercounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
