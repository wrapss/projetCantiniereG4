import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {IDataUser} from "../_interfaces/user";
import {ICredentials, ICredentialsRegister} from "../_interfaces/credentials";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(credentials:ICredentials){
        return this.http.post('http://localhost:8080/stone.lunchtime/user/debit/',credentials)
    }

    register(credentials:ICredentialsRegister){
        return this.http.put('http://localhost:8080/stone.lunchtime/user/register',credentials)
    }
}
