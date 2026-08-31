import { UserService } from '../../../../../core/services/user/user-service';
import { MyUser } from './../../../../../core/models/my-user';
import { Component, inject, OnInit, signal } from '@angular/core';
import { UserRole } from '../../../../../core/models/enums/user-role';
import { NotyficationService } from '../../../../../core/services/notification/notyfication-service';

@Component({
  selector: 'app-my-user',
  imports: [],
  templateUrl: './my-user.html',
  styleUrl: './my-user.scss',
})
export class MyUserComponent implements OnInit
{
  private userService = inject(UserService);
  protected myUser = signal<MyUser | undefined>(undefined);
  protected isAdmin = signal(false);
  protected readonly UserRole = UserRole;
  private readonly notificationService = inject(NotyficationService)

  ngOnInit()
  {
    this.userService.getMyUser().subscribe(
      {
        next: myUser =>
          { 
            this.myUser.set(myUser),
            this.isAdmin.set(myUser.userRole === UserRole.Admin);
          },
        error: err => this.notificationService.error(err.error)
      });
  }

}
