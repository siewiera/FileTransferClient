import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth/auth';
import { catchError, map, of } from 'rxjs';


export const authGuard: CanActivateFn = () => {

  const auth = inject(Auth);
  const router = inject(Router);

  return auth.checkSession().pipe
  (
    map(() => true ),
    catchError((error) => 
    {
      if(error.status === 401)
      {
        return of(router.createUrlTree(['/login']));
      }
        
      throw error;
    })
  );
};
