import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICredentials, ICredentialsRegister } from "../_interfaces/credentials";

// import { tap } from "rxjs";
// import { IDataUser } from "../_interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  //login(credentials:ICredentials){
  //  return this.http.get('http://localhost:8080/stone.lunchtime/login?email='+credentials.email+'&password='+credentials.password);
  //}

  public login(credentials: ICredentials): Observable<HttpResponse<Object>> {
    return this._http.post('http://localhost:8080/stone.lunchtime/login', credentials, {observe: 'response'}).pipe();
  }

  public register(credentials: ICredentialsRegister): Observable<Object> {
    return this._http.put('http://localhost:8080/stone.lunchtime/user/register', credentials);
  }
  
}
