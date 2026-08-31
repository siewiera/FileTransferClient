import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../core/services/register/register-service';
import { Router, RouterLink } from '@angular/router';
import { NotyficationService } from '../../core/services/notification/notyfication-service';

@Component({
  selector: 'app-register',
  imports: [ FormsModule, RouterLink ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register 
{
  private registerService = inject(RegisterService);
  private router = inject(Router);
  private readonly notificationService = inject(NotyficationService);

  username = '';
  password = '';
  passwordRepeated = '';
  email = '';

  register()
  {
    if(this.password != this.passwordRepeated)
      return;
    
    this.registerService
      .register(this.username, this.password, this.email)
      .subscribe
      ({
        next: () => 
        {
          this.notificationService.success('The account has been successfully created.');
          this.router.navigate(['/login']);
        },
        error: err => this.notificationService.error(err.error)
      });
  }
}
