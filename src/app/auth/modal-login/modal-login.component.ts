import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICredentials } from "../../_interfaces/credentials";
import { TokenService } from "../../_services/token.service";
import { AuthService } from "../../_services/auth.service";
import { ModalRegisterComponent } from "../modal-register/modal-register.component";
import { MdpOublieComponent } from "../mdp-oublie/mdp-oublie.component";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent  {

  /* Identifiants de connexion de l'utilisateur */
  public form: ICredentials = {
    email: '',
    password: ''
  };
  /* Message d'erreur si utilisateur absent de la base */
  public alerte = false;

  constructor(private _tokenService: TokenService,
              private _dialogRef : MatDialog,
              private _authService: AuthService) {}

  /**
   * Ferme le modal
   */
  public close(): void {
    this._dialogRef.closeAll();
  }

  /**
   * Ouvre le modal de création de compte
   */
  public openDialogRegister(): void {
    this._dialogRef.open(ModalRegisterComponent);
  }

  /**
   * Ouvre le modal de mot de passe oublié
   */
  public openDialogPassword(): void {
    this._dialogRef.open(MdpOublieComponent);
  }

  /**
   * Valide, ou non, la combinaison nom d'utilisateur et mot de passe 
   */
  public login(): void {
    this._authService.login(this.form).subscribe(
      data => {
         //@ts-ignore
        this._tokenService.saveToken(data.headers.get('Authorization'))
        this._dialogRef.closeAll();
      },
      err => {
        this.alerte = true;
      } 
    )
  }
  
}
