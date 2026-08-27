import { Service } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { env } from 'process';

@Service()
export class RegisterService 
{
    private http = inject(HttpClient);
    private apiUserUrl = environment.apiUserUrl;

    register
    (
        username: string, 
        password: string,
        email:string,
    )
    {
        return this.http.post(
            `${this.apiUserUrl}/accountManager/registerAccount`,
            {
                username,
                password,
                email
            },
            {
                // withCredentials: true,
                responseType: 'text'
            }
        );
    }
}
