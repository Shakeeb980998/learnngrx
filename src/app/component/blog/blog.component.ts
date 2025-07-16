import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../../shared/store/Blog/Blog.model';
import { getblog, getbloginfo } from '../../shared/store/Blog/Blog.selectors'
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
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { delteblog, loadblog } from '../../shared/store/Blog/Blog.actions';


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

  constructor(private store:Store<AppStateModel>, private dialog:MatDialog){

  }

  bloglist !: BlogModel[];
  bloginfor !: Blogs;
  
  ngOnInit(): void {
    this.store.dispatch(loadblog());
    
    this.store.select(getbloginfo).subscribe(item => {
      this.bloginfor = item;
      console.log(this.bloginfor);
    });
  }

  AddBlog(){
    this.openpopup(0,'add Blog');
  }

  openpopup(id:any,title:any,isedit=false){
    this.dialog.open(AddblogComponent,{
      width:'40%',
      data :{
        id:id,
        title:title,
        isedit:isedit
      }
    })
  }

  UpdateBlog(id:any){
    this.openpopup(id,'Edit Blog',true);
  }

  RemoveBlog(id:any){
      if(confirm("are you sure want to remove")){
        this.store.dispatch(delteblog({id:id}));
      }
  }



}
