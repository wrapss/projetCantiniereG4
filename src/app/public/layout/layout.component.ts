import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from "../../auth/modal-login/modal-login.component";
import { TokenService } from "../../_services/token.service";
import { CartService } from "../../_services/cart.service";

/**
 * Component permettant d'afficher le layout public de l'application (commun à tous les utilisateurs, connectés ou non)
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  /* Prénom de l'utilisateur connecté */
  public firstname!: string;

  constructor(private _dialogRef: MatDialog,
              private _tokenService: TokenService,
              private _cartService: CartService) { }

  ngOnInit() {
    this.firstname = this._tokenService.getUserInfo().firstname;
  }

  /**
   * Vérifie si l'utilisateur connecté a le rôle "utilisateur" 
   * @returns true si l'utilisateur connecté est "utilisateur", false sinon
   */
  public userLogged(): boolean {
    return this._tokenService.isLoggedAsUser();
  }

  /**
   * Vérifie si l'utilisateur connecté a le rôle "administrateur" (lunch lady)
   * @returns true si l'utilisateur connecté est "administrateur", false sinon
   */
  public adminLogged(): boolean {
    return this._tokenService.isLoggedAsAdmin();
  }

  /**
   * Ouvre le modal de connexion
   */
  public openDialogLogin(): void {
    this._dialogRef.open(ModalLoginComponent,{
      data: {
        name: 'Samuel'
      }
    });
  }

  /**
   * Permet de déconnecter l'utilisateur
   */
  public logout(): void {
    this._tokenService.clearToken();
  }

  /**
   * Affiche le nombre total de produits présents dans le panier de l'utilisateur
   * @returns Nombre de produits présents dans le panier de l'utilisateur
   */
  public countCartProducts(): number {
    return this._cartService.getCountCartProducts();
  }

}
