import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Auth } from '../../../core/services/auth/auth';
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { NotyficationService } from '../../../core/services/notification/notyfication-service';

@Component({
  selector: 'app-activate-account-user',
  imports: [ FormsModule, RouterLink],
  templateUrl: './activate-account-user.html',
  styleUrl: './activate-account-user.scss',
})
export class ActivateAccountUser 
{
  private auth = inject(Auth);
  private router = inject(Router);
  private readonly notificationService = inject(NotyficationService);

@ViewChild('activationCard')
  activationCard!: ElementRef<HTMLDivElement>;
  identifier = '';

  resendToken()
  {
    this.auth.resendActivationToken(this.identifier).subscribe
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


  onMouseMove(event: MouseEvent): void {

    if (!this.activationCard) {
      return;
    }

    const card = this.activationCard.nativeElement;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty(
      '--mouse-x',
      `${mouseX}px`
    );

    card.style.setProperty(
      '--mouse-y',
      `${mouseY}px`
    );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
