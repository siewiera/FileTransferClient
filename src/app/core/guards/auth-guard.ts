import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { catchError, map, of } from 'rxjs';


export const authGuard: CanActivateFn = () => {

  console.log('AUTH GUARD START');

  const auth = inject(Auth);
  const router = inject(Router);

  return auth.checkSession().pipe
  (
    map(() => true ),
    catchError(() => of(router.createUrlTree(['/login'])))
  );

  // return auth.checkSession()
  //   .pipe(
  //     map(session => {

  //       if(route.routeConfig?.path === 'login')
  //         return router.createUrlTree(['/home']);

  //       return true;
  //     }),

  //     catchError(err => {

  //       if(route.routeConfig?.path === 'login')
  //         return of(true)

  //       console.log(`SESSION ERROR: ${err.status}`);
  //       return of(router.createUrlTree(['/login']));
  //     })
  //   );
};
