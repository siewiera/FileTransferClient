import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Auth 
{
    private http = inject(HttpClient);
    private apiUserUrl = 'http://localhost:5264/api/fileTransfer';

    login(username: string, password: string)
    {
        return this.http.post(`${this.apiUserUrl}/userSession/login`,
            {
                username, 
                password
            },
            {
                withCredentials: true,
                observe: 'response'
            }
        );
    }

    logout()
    {
        return this.http.post(`${this.apiUserUrl}/userSession/logout`,
            {},
            {
                withCredentials: true,
                responseType: 'text'
            });
    }


    checkSession()
    {
        return this.http.get(`${this.apiUserUrl}/userSession/check`,
            {
                withCredentials: true,
                responseType: "text"
            }
        );
    }
}
