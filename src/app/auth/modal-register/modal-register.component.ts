import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ICredentialsRegister } from "../../_interfaces/credentials";
import { AuthService } from "../../_services/auth.service";

/**
 * Component permettant d'afficher le modal de création de compte
 */
@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  /* Message d'erreur si utilisateur absent de la base */
  public alerte = false;
  /* Données du formulaire à compléter par l'utilisateur */
  public form!: ICredentialsRegister;

  constructor(private _dialogRef : MatDialog,
              private _authService: AuthService) { }

  ngOnInit(): void {}

  /**
   * Envoie les données du formulaire au service d'authentification
   */
  public onSubmit(): void {
    this._authService.register(this.form).subscribe(
      data => console.log(data)
    );
  }

  /**
   * Ferme le modal
   */
  public close(): void {
    this._dialogRef.closeAll();
  }

}
