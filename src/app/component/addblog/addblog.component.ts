import { Component, Inject, OnInit  } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { addblog, updateblog } from '../../shared/store/Blog/Blog.actions';
import { getblogbyid } from '../../shared/store/Blog/Blog.selectors';

@Component({
  selector: 'app-addblog',
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  blogfrom: any;
  pagetitile='';
  editblogid=0;
  editdata!:BlogModel;

  constructor(
    private dialogred: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store:Store<AppStateModel>,
    @Inject (MAT_DIALOG_DATA) public data:any) {
    this.blogfrom = this.builder.group({
      id: this.builder.control(0),
      title:this.builder.control('',Validators.required),
      description:this.builder.control('',Validators.required)
    });
  }
  ngOnInit(): void {
    console.log(this.data);

    this.pagetitile= this.data.title;

    if(this.data.isedit){
      this.editblogid=this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data;
        this.blogfrom.setValue({id:this.editdata.id, title:this.editdata.title,description:this.editdata.description})
      })
    }
  }



  closepopup() {
    this.dialogred.close();
  }

  SaveBlogs(){
    if(this.blogfrom.valid){
      const _bloginput : BlogModel={
        id:0,
        title:this.blogfrom.value.title as string,
        description:this.blogfrom.value.description as string
      }

      if(this.data.isedit){
          _bloginput.id = this.blogfrom.value.id as number;
          this.store.dispatch(updateblog({bloginput: _bloginput}))
      }else{
          this.store.dispatch(addblog({bloginput: _bloginput}))
      }
   
      this.closepopup();
    }
  }
}
