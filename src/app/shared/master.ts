import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/Blog.model';
import { Observable ,tap} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private http: HttpClient) {}

  haveaccess(){
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>("http://localhost:3000/blogs").pipe(
      map(blogs => blogs.map(blog => ({
        ...blog,
        id: Number(blog.id) 
      })))
    );
  }

  
CreateBlogs(bloginput: BlogModel) {
  return this.http.post<BlogModel>("http://localhost:3000/blogs", bloginput).pipe(
    switchMap(() =>
      this.http.get<BlogModel[]>("http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc").pipe(
        map(blogs =>
          blogs.map(blog => ({
            ...blog,
            id: Number(blog.id)
          }))
        ),
        map(blogs => blogs[0])
      )
    )
  );
}


UpdateBlogs(bloginput: BlogModel) {
  return this.http.put<BlogModel>(`http://localhost:3000/blogs/${bloginput.id}`, bloginput);
}

DeleteBlogs(blogid : number) {
return this.http.delete<BlogModel>(`http://localhost:3000/blogs/${blogid}`);
};

}
