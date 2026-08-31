import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth/auth';
import { inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NotyficationService } from '../../../core/services/notification/notyfication-service';

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
  private readonly notificationService = inject(NotyficationService);
  email = '';

  resendToken()
  {
    this.auth.resendActivationToken(this.email).subscribe
    (
      {
        next: () => 
        {
          this.notificationService.success('An account activation link has been sent to your email.')
          this.router.navigate(['/login']);
        },
        error: (err) => this.notificationService.error(err.error)
      }
    )
  }
}
