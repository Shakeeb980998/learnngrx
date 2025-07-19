// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuheaderComponent } from "./component/menuheader/menuheader.component";
import { LoadingspinerComponent } from "./component/loadingspiner/loadingspiner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuheaderComponent, LoadingspinerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'learnngrx';
}
