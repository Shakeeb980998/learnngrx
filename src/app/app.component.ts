// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuheaderComponent } from "./component/menuheader/menuheader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuheaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'learnngrx';
}
