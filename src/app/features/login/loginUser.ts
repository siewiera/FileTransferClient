import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/services/auth/auth';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterLink ],
  standalone: true,
  templateUrl: './loginUser.html',
  styleUrl: './loginUser.scss',
})
export class Login 
{
  private auth = inject(Auth);
  private router = inject(Router);
  showActivationLink = signal(false);

  username = '';
  password = '';
  
  login()
  {
    this.auth.login( this.username, this.password )
    .subscribe(
    {
      next: response => 
      {
        this.router.navigate(['/home']);
  
      },
  
      error: err => {

        if(err.status === 409)
          this.router.navigate(['/home']); //juz zalogowany
        else if (err.status === 403) {
          this.showActivationLink.set(true);
          console.log('showActivationLink:', this.showActivationLink);
        }
        else
          this.showActivationLink.set(false);
  
        console.log(err.status);           // np. 401
        console.log(err.error);            // body błędu
  
      }
    });
  }

  goToActivation()
  {
    this.router.navigate([`/activate-account-user`]);
  }
}
