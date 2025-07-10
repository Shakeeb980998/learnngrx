import { createReducer,on } from "@ngrx/store";
import { Blogstate } from "./Blog.state";
import { addblog, delteblog, loadblog, updateblog } from "./Blog.actions";
import { BlogModel } from "./Blog.model";




const _BlogReducer = createReducer(Blogstate,
  on(loadblog, (State) => {
    return {
      ...State
    };
  }),

   on(addblog, (State,action) => {
    const _blog={...action.bloginput}
    _blog.id = State.bloglist.length+1;
    return {
      ...State,
      bloglist:[...State.bloglist,_blog]
    };
  }),


    on(updateblog, (State,action) => {
    const _blog={...action.bloginput};
    const updatedblog = State.bloglist.map(blog=>{
      return _blog.id === blog.id?_blog:blog;


    })
    return {
      ...State,
      bloglist:updatedblog
    };
  }),


    on(delteblog, (State,action) => {
    const updatedblog = State.bloglist.filter((data:BlogModel)=>{
      return data.id !==action.id
    })
    return {
      ...State,
      bloglist:updatedblog
    };
  })



);

export function BlogReducer(state: any, action: any) {
  return _BlogReducer(state, action);
}

