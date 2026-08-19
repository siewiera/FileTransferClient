import { Routes } from '@angular/router';
import { Login } from './features/login/loginUser';
import { Home } from './features/dashboard/home';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';


export const routes: Routes = 
[
    {
        path: 'login',
        component: Login,
        canActivate: [guestGuard]
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
