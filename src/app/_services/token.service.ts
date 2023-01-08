import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
// import { ITokenUser } from "src/app/_interfaces/user";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _router: Router) { }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
    this._router.navigate(['admin']);
  }

  public isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public isLoggedAsUser(): boolean {
    const token = localStorage.getItem('token');
    if(token != null) {
      const decode: any = jwtDecode(token);
      return !decode.user.isLunchLady;
    }
    return false;
  }

  public isLoggedAsAdmin(): boolean {
    const token = localStorage.getItem('token');
    if(token != null) {
      const decode: any = jwtDecode(token);
      return decode.user.isLunchLady;
    }
    return false;
  }

  public getUserInfo(): any {
    const token = localStorage.getItem('token');
    if(token != null) {
      const decode: any = jwtDecode(token);
      return decode.user;
    }
    return false;
  }

  public getUserID(): any {
    const token = localStorage.getItem('token');
    if(token != null) {
      const decode: any = jwtDecode(token);
      return decode.user.id;
    }
    return false;
  }

  public clearToken(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

}
