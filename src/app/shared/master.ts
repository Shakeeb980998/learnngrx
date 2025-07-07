import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor() { }

  haveaccess(){
    return true;
  }
}
