import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { getblog } from '../../shared/store/Blog/Blog.selectors'
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppStateModel } from '../../shared/store/Global/AppState.model';


@Component({
  selector: 'app-blog',
  imports: [

             MatButtonModule,MatCardModule,RouterModule,
             MatInputModule,  MatSelectModule, MatFormFieldModule,
             MatToolbarModule,  MatMenuModule, CommonModule,
             MatIconModule


  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor(private store:Store<AppStateModel>){

  }

  bloglist !: BlogModel[];
  
  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.bloglist = item;
      console.log(this.bloglist);
    })
  }



}
