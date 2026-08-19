import { UserService } from '../../../../../core/services/user/user';
import { MyUser } from './../../../../../core/models/my-user';
import { Component, inject } from '@angular/core';
import { UserRole } from '../../../../../core/models/enums/user-role';

@Component({
  selector: 'app-my-user',
  imports: [],
  templateUrl: './my-user.html',
  styleUrl: './my-user.scss',
})
export class MyUserComponent 
{
  private userService = inject(UserService);
  protected myUser?: MyUser;
  protected readonly UserRole = UserRole;

  ngOnInit()
  {
    
    this.userService.geMyUser().subscribe(
      {
        next: myUser => 
          {
            this.myUser = myUser;
            console.log(`user: ${myUser.username}`)
            console.log(`user: ${myUser.userRole}`)
          },
        error: err => console.log(`error: ${err}`)
      });
  }

}
