import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth/auth';
import { FormsModule } from "@angular/forms";
import { MyUserComponent } from './components/users/my-user/my-user';
import { NotyficationService } from '../../core/services/notification/notyfication-service';


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
  private readonly notificationService = inject(NotyficationService);


  logout()
  {
    this.auth.logout()
    .subscribe({
      next: response => 
      {
        this.notificationService.info('You will be logged out.')
        this.router.navigate(['/login']);
      },
      error: err => {
        this.notificationService.error(err.error)
        console.log(err.status);
        console.log(err.error);
      }
    });
  }
}
