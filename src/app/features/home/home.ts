import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-home',
  imports: [ FormsModule ],
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
