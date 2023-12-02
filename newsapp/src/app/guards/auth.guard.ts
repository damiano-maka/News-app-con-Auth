import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
 
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return true;
  }

  router.navigate(['auth','login']);
  return false; 
};
