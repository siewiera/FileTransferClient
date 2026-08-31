import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/services/auth/auth';
import { FormsModule } from "@angular/forms";
import { NotyficationService } from '../../core/services/notification/notyfication-service';

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
  private readonly notificationService = inject(NotyficationService);
  showActivationLink = signal(false);

  username = '';
  password = '';
  
  login()
  {
    this.auth.login( this.username, this.password )
    .subscribe(
    {
      next:() =>
      {
        this.notificationService.success(String('Logged in'))
        this.router.navigate(['/home']);
      },
  
      error: err => {
        if (err.status === 400 && err.error?.errors) 
        {
          const validationErrors = err.error.errors;
          return Object.values(validationErrors)
            .flat()
            .forEach(message => {
              this.notificationService.error(String(message));
            });
        }
        else if (err.status === 403) 
          this.showActivationLink.set(true);
        else
          this.showActivationLink.set(false);
          
        this.notificationService.error(String(err.error));
        
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
