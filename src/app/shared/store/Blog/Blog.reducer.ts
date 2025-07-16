import { createReducer,on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addblog, addblogsuccess, delteblog, loadblog, loadblogfail, loadblogsuccess, updateblog } from "./Blog.actions";
import { BlogModel } from "./Blog.model";




const _BlogReducer = createReducer(BlogState,
  on(loadblog, (State) => {
    return {
      ...State
    };
  }),

  //  on(addblog, (State,action) => {
  //   const _blog={...action.bloginput}
  //   _blog.id = State.bloglist.length+1;
  //   return {
  //     ...State,
  //     bloglist:[...State.bloglist,_blog]
  //   };
  // }),


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
  }),
  on(loadblogsuccess, (State,action) => {
    return {
      ...State,
      bloglist:[...action.bloglist],
      Errormessage : ''
    }
  }),

   on(loadblogfail, (State,action) => {

    return {
      ...State,
      bloglist:[],
      Errormessage:action.Errortext.message
    }
  }),
     on(addblogsuccess, (State,action) => {
    const _blog={...action.bloginput}
    return {
      ...State,
      bloglist:[...State.bloglist,_blog]
    };
  }),




);

export function blogReducer(state: any, action: any) {
  return _BlogReducer(state, action);
}


