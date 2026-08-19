import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth/auth';
import { FormsModule } from "@angular/forms";
import { MyUserComponent } from './components/users/my-user/my-user';


@Component({
  selector: 'app-home',
  imports: [ FormsModule, MyUserComponent ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home 
{
  private auth = inject(Auth);
  private router = inject(Router);

  logout()
  {
    this.auth.logout()
    .subscribe({
      next: response => 
      {
        console.log('LOGOUT OK', response);
        this.router.navigate(['/login']);
      },
  
      error: err => {
        console.log('LOGOUT ERROR');
        console.log(err.status);
        console.log(err.error);
      }
    });
  }
}
