import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth/auth';
import { inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account-user',
  imports: [FormsModule],
  templateUrl: './activate-account-user.html',
  styleUrl: './activate-account-user.scss',
})
export class ActivateAccountUser 
{
  private auth = inject(Auth);
  private router = inject(Router);
  email = '';

  resendToken()
  {
    this.auth.resendActivationToken(this.email, 1).subscribe
    (
      {
        next: () => this.router.navigate(['/login']),     
        error: (err) => console.log(`Error: ${err.error}`)
      }
    )
  }
}
