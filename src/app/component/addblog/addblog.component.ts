import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import {
  addblog,
  updateblog,
} from '../../shared/store/Blog/Blog.actions';
import { getblogbyid } from '../../shared/store/Blog/Blog.selectors';
import { Subscription } from 'rxjs';
import { loadspiner } from '../../shared/store/Global/App.Actions';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
})
export class AddblogComponent implements OnInit, OnDestroy {
  blogfrom!: FormGroup;
  pagetitile = '';
  editblogid = 0;
  editdata!: BlogModel;
  sub$!: Subscription;

  constructor(
    private dialogref: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.blogfrom = this.builder.group({
      id: [0],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pagetitile = this.data.title;

    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.sub$ = this.store
        .select(getblogbyid(this.editblogid))
        .subscribe((_data) => {
          if (_data) {
            this.editdata = _data;
            this.blogfrom.patchValue({
              id: this.editdata.id,
              title: this.editdata.title,
              description: this.editdata.description,
            });
          }
        });
    }
  }

  SaveBlogs() {
    if (this.blogfrom.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogfrom.value.title,
        description: this.blogfrom.value.description,
      };

      this.store.dispatch(loadspiner({ isloaded: true }));
      setTimeout(() => {
        if (this.data.isedit) {
          _bloginput.id = this.blogfrom.value.id;
          this.store.dispatch(updateblog({ bloginput: _bloginput }));
        } else {
          this.store.dispatch(addblog({ bloginput: _bloginput }));
        }
        this.closepopup();
      }, 2000);
    }
  }

  closepopup() {
    this.dialogref.close();
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }
}
