import { Routes } from '@angular/router';
import { Login } from './features/login/loginUser';
import { Home } from './features/dashboard/home';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { Register } from './features/register/register';
import { ActivateAccountUser } from './features/activateAccount/activate-account-user/activate-account-user';


export const routes: Routes = 
[
    {
        path: 'login',
        component: Login,
        canActivate: [guestGuard]
    },
    {
        path: 'register',
        component: Register,
        canActivate: [guestGuard]
    },
    {
        path: 'activate-account-user',
        component: ActivateAccountUser,
        canActivate: [guestGuard]
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: '**',
        canActivate: [authGuard],
        component: Home
    }
];
