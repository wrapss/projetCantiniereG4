import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ITokenUser} from "../_interfaces/user";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  isLoggedAsUser(): boolean{
    const token = localStorage.getItem('token')
    if(token != null){
      const decode : any = jwtDecode(token)
      return !decode.user.isLunchLady
    }
    return false
  }

  isLoggedAsAdmin(): boolean{
    const token = localStorage.getItem('token')
    if(token != null){
      const decode : any = jwtDecode(token)
      return decode.user.isLunchLady
    }
    return false
  }

  getUserInfo(){
    const token = localStorage.getItem('token')
    if(token != null){
      const decode : any = jwtDecode(token)
      return decode.user
    }
    return false
  }

  clearToken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }
}
