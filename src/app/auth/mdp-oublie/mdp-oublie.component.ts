import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

/**
 * Component permettant d'afficher le modal de mot de passe oublié
 */
@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.css']
})
export class MdpOublieComponent implements OnInit {

  constructor(private _dialogRef : MatDialog) { }

  ngOnInit(): void {}
  
  /**
   * Ferme le modal
   */
  public cancelPasswordForgotten(): void {
    this._dialogRef.closeAll();
  }
  
}
