import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/user/findall');
  }

  public getUser(id: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/user/find/' + id);
  }

  public soldeAccountUser(uid: string | null, amount: number): Observable<Object> {
    return this._http.post('http://localhost:8080/stone.lunchtime/user/debit/' + uid + '?amount=' + amount, {});   
  }

  public creditAccountUser(uid: string | null, amount: number): Observable<Object> {
    return this._http.post('http://localhost:8080/stone.lunchtime/user/credit/' + uid + '?amount=' + amount, {});   
  }

  public editUser(userID: any, user: any): Observable<Object> {
    return this._http.patch('http://localhost:8080/stone.lunchtime/user/update/' + userID, user);
  }
  
}
