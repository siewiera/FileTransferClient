import { Component, inject, Inject, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('registerCard')
  registerCard!: ElementRef<HTMLDivElement>;

  termsAccepted = false;
  username = '';
  password = '';
  passwordRepeated = '';
  email = '';

  register()
  {
    if(this.password != this.passwordRepeated)
    {
      this.notificationService.warning("The entered passwords must be identical.");
      return;
    }

    if(!this.termsAccepted)
    {
      this.notificationService.warning("You must accept the service's terms and conditions.");
      return;
    }
    
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

  // ==========================================
  // PASSWORD VISIBILITY
  // ==========================================

  showPassword = false;
  showConfirmPassword = false;


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  onMouseMove(event: MouseEvent): void {

    if (!this.registerCard) {
      return;
    }

    const card =
      this.registerCard.nativeElement;

    const rect =
      card.getBoundingClientRect();


    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;


    card.style.setProperty(
      '--mouse-x',
      `${mouseX}px`
    );

    card.style.setProperty(
      '--mouse-y',
      `${mouseY}px`
    );
  }


  // onMouseLeave(): void {

  //   if (!this.registerCard) {
  //     return;
  //   }

  //   const card =
  //     this.registerCard.nativeElement;


  //   card.style.setProperty(
  //     '--mouse-x',
  //     '50%'
  //   );

  //   card.style.setProperty(
  //     '--mouse-y',
  //     '50%'
  //   );
  // }


}
