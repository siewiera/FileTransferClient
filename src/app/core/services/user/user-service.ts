import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MyUser } from '../../models/my-user';
import { UserRole } from '../../models/enums/user-role';
import { map, Observable } from 'rxjs';

@Service()
export class UserService 
{
    private http = inject(HttpClient);
    private apiUserUrl = environment.apiUserUrl;
    
    getMyUser()
    {
        return this.http.get<MyUser>(`${this.apiUserUrl}/user/myUser`,
            {
                withCredentials: true
            }
        )
        .pipe(
            map(myUser => (
                {
                    ...myUser,
                    userRole: myUser.userRole as UserRole
                }))
        )
    }
}
