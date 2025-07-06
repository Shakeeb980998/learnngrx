// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counterbutton } from "./component/counterbutton/counterbutton";
import { Counterdisplay } from "./component/counterdisplay/counterdisplay";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Counterbutton, Counterdisplay],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'learnngrx';
}
