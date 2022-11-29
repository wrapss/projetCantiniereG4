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

  getUser(id: number){
    return this.http.get('http://localhost:8080/stone.lunchtime/user/find/'+id)
  }

  soldeAccountUser(uid:any,amount:number){
    return this.http.post('http://localhost:8080/stone.lunchtime/user/debit/'+uid+'?amount='+amount,{})
  }

  creditAccountUser(uid:any,amount:number){
    return this.http.post('http://localhost:8080/stone.lunchtime/user/credit/'+uid+'?amount='+amount,{})
  }

  editUser(userID:any,user:any){
    return this.http.patch('http://localhost:8080/stone.lunchtime/user/update/'+userID,user)
  }
}
