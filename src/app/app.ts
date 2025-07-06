import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counterbutton } from './component/counterbutton/counterbutton';
import { Counterdisplay } from './component/counterdisplay/counterdisplay';
import { MaterialModule } from './Material.Module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,Counterbutton,Counterdisplay,MaterialModule,BrowserAnimationsModule,BrowserModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'learnngrx';
}
