import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../core/services/register/register-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ FormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register 
{
  private registerService = inject(RegisterService);
  private router = inject(Router);

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
        next: () => this.router.navigate(['/login']),
        error: err => console.log('REGISTER ERROR:', err.error)
      });
  }
}
