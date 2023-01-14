import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from "../../auth/modal-login/modal-login.component";
import { TokenService } from "../../_services/token.service";
import { CartService } from "../../_services/cart.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  public firstname!: string;

  constructor(private _dialogRef: MatDialog,
              private _tokenService: TokenService,
              private _cartService: CartService) { }

  ngOnInit() {
    this.firstname = this._tokenService.getUserInfo().firstname;
  }

  public userLogged(): boolean {
    return this._tokenService.isLoggedAsUser();
  }

  public adminLogged(): boolean {
    return this._tokenService.isLoggedAsAdmin();
  }

  public openDialogLogin(): void {
    this._dialogRef.open(ModalLoginComponent,{
      data: {
        name: 'Samuel'
      }
    });
  }

  public logout(): void {
    this._tokenService.clearToken();
  }

  public countCartProducts(): number {
    return this._cartService.getCountCartProducts();
  }

}
