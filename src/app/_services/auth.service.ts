import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";import {IDataUser} from "../_interfaces/user";
import {ICredentials, ICredentialsRegister} from "../_interfaces/credentials";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    //login(credentials:ICredentials){
    //    return this.http.get('http://localhost:8080/stone.lunchtime/login?email='+credentials.email+'&password='+credentials.password)
    //}

    login(credentials:ICredentials) : Observable<HttpResponse<Object>>{
        return this.http.post(`http://localhost:8080/stone.lunchtime/login`,credentials, {observe: 'response'}).pipe();
    }


    register(credentials:ICredentialsRegister){
        return this.http.put('http://localhost:8080/stone.lunchtime/user/register',credentials)
    }
}
