import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/Blog.model';
import { Observable ,tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private http: HttpClient) {}

  haveaccess(){
    return true;
  }

  GetAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/blogs");
  }

CreateBlogs(bloginput : BlogModel) {
  return this.http.post("http://localhost:3000/blogs", bloginput).pipe(
    tap(() => {
      this.http.get<BlogModel>("http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc");
    })
  );
}

}
