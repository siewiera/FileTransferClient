import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Service()
export class Auth 
{
    private http = inject(HttpClient);
    private apiUserUrl = environment.apiUserUrl;

    login(username: string, password: string)
    {
        return this.http.post(`${this.apiUserUrl}/userSession/login`,
            {
                username, 
                password
            },
            {
                withCredentials: true
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

    resendActivationToken(email: string)
    {
        return this.http.post(`${this.apiUserUrl}/accountManager/accountActivation`,
            { 
                email
            },
            {
                responseType: "text"
            }
        )
    }
}
