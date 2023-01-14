import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { IDataUser } from "../_interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/user/findall');
  }

}
