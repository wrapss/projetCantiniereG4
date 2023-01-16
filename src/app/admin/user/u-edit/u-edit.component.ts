import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../_services/user.service";
import { IUser } from "../../../_interfaces/user";

/**
 * Component permettant d'afficher les détails d'un compte utilisateur
 */
@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  /* Informations de l'utilisateur */
  public user!: IUser;
  /* uid de l'utilisateur */
  public uid: string | null = this._activatedRoute.snapshot.paramMap.get('uid');
  /* Montant à créditer ou à solder */
  public amount: number = 0;

  constructor(private _activatedRoute: ActivatedRoute,
              private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUser(Number(this.uid)).subscribe( data => {   
      // @ts-ignore
      this.user = data
    } );
  }

  /**
   * Fonction permettant de solder le compte d'un utilisateur
   */
  public soldeAccount(): void {
    this._userService.soldeAccountUser(this.uid, this.amount).subscribe( data => {
      // @ts-ignore
      this.user = data;
    } );
  }

  /**
   * Fonction permettant de créditer un montant sur le compte d'un utilisateur
   */
  public creditAccount(): void {
    this._userService.creditAccountUser(this.uid, this.amount).subscribe( data => {
      // @ts-ignore
      this.user = data
    } );
  }

}
