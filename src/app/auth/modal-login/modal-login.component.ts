import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ICredentials} from "../../_interfaces/credentials";
import {TokenService} from "../../_services/token.service";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";
import {MdpOublieComponent} from "../mdp-oublie/mdp-oublie.component";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent  {
  form: ICredentials = {
    email: '',
    password: ''
  }
  alerte = false
  constructor(
    private tokenService: TokenService,
    private dialogRef : MatDialog,
    private authService: AuthService) {
  }
  close(){
    this.dialogRef.closeAll();
  }

  openDialogRegister(){
    this.dialogRef.open(ModalRegisterComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }

  openDialogPassword(){
    this.dialogRef.open(MdpOublieComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
  login(): void{
    this.authService.login(this.form).subscribe(
      data => {
        // @ts-ignore
        this.tokenService.saveToken(data.headers.get('Authorization'))
        this.dialogRef.closeAll();
      },
      err => {
        this.alerte = true
      }
    )
  }
}
