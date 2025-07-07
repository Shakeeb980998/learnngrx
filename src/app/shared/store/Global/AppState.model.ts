import { BlogComponent } from "../../../component/blog/blog.component";
import { CounterModel } from "../counter.model";

export interface AppStateModel{
    counter:CounterModel,
    blog:BlogComponent[]
}