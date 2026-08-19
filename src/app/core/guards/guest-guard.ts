import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Auth } from '../services/auth/auth';

export const guestGuard: CanActivateFn = () => 
{
  const auth = inject(Auth);
  const router = inject(Router);

  return auth.checkSession().pipe
  (
    map(() => router.createUrlTree(['/home'])),
    catchError(() => of(true))
  )
};
