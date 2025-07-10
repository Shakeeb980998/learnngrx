import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counterbutton } from './component/counterbutton/counterbutton';
import { Counterdisplay } from './component/counterdisplay/counterdisplay';
import { MaterialModule } from './Material.Module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CustomercounterComponent } from './component/customercounter/customercounter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    MatButtonModule,
    FormsModule,
    MenuheaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'learnngrx';
}
