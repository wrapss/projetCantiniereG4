import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from "../../auth/modal-login/modal-login.component";
import {TokenService} from "../../_services/token.service";
import {CartService} from "../../_services/cart.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{


  constructor(
              private dialogRef : MatDialog,
              public tokenService: TokenService,
              public cartService: CartService
              ) { }
  public isAuthUser: boolean = this.tokenService.isLoggedAsUser();
  public isAuthAdmin: boolean = this.tokenService.isLoggedAsAdmin();

  public firstname = '';

ngOnInit() {
  this.firstname = this.tokenService.getUserInfo().firstname;
}

  openDialogLogin(){
    this.dialogRef.open(ModalLoginComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
  logout(): void{
    this.tokenService.clearToken()
  }


}
