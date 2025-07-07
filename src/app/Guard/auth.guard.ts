import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Master } from '../shared/master';

export const authGuard: CanActivateFn = (route, state) => {

const currentmenu = route.url[0].path;
const router=inject(Router);
const service = inject(Master);

if(service.haveaccess()){
  // if ( currentmenu == 'blog'){
  //   return true;
  // }else{
  //   alert('No Access bro');
  //   router.navigate(['']);
  //   return false;

  // }
 return true;


}else{
  alert('access denided');
  router.navigate(['']);
  return false;
}
};
