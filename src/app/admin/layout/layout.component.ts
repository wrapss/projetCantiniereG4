import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../_services/token.service";

/**
 * Component permettant d'afficher le layout d'un utilisateur connecté comme "administrateur" (lunch lady)
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  /* Identifie l'utilisateur connecté comme "administrateur" */
  public isAuth: boolean = this._tokenService.isLoggedAsAdmin();

  constructor(private _tokenService: TokenService) { }

  ngOnInit(): void { }

  /**
   * Déconnecte l'utilisateur
   */
  public logout(): void {
    this._tokenService.clearToken();
  }
  
}
