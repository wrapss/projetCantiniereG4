import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {IDataUser} from "../_interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get('http://localhost:8080/stone.lunchtime/user/findall')
  }

  getUser(uid: string | null){
    return this.http.get('http://localhost:8080/stone.lunchtime/user/find/'+uid)
  }

  soldeAccountUser(){
    return this.http.post('http://localhost:8080/stone.lunchtime/user/debit/1?amount=1',{})
  }

  creditAccountUser(){
    return this.http.post('http://localhost:8080/stone.lunchtime/user/credit/1?amount=1',{})
  }
}
