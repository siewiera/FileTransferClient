import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
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

        if(err.status == 403)
          this.router.navigate(['/home']);
  
        console.log(err.status);           // np. 401
        console.log(err.error);            // body błędu
  
      }
    });
  }
}
