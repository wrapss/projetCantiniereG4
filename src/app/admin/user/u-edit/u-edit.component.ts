import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../_services/user.service";
import { IUser } from "../../../_interfaces/user";

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  public user!: IUser;
  public amount: number = 0;
  public uid: string | null = this._activatedRoute.snapshot.paramMap.get('uid');

  constructor(private _activatedRoute: ActivatedRoute,
              private _userService: UserService) { }

  ngOnInit(): void {
    // let uid = this._activatedRoute.snapshot.paramMap.get('uid');
    // console.log(uid);
    this._userService.getUser(Number(this.uid)).subscribe( data => {   // Number() => réellement nécessaire ? 
      // @ts-ignore
      this.user = data
    } );
  }

  /** TODO : mettre un solde de compte à 0 après utilisation de la fonction */
  public soldeAccount(): void {
    // let uid = this._activatedRoute.snapshot.paramMap.get('uid');
    this._userService.soldeAccountUser(this.uid, this.amount).subscribe( data => {
      // @ts-ignore
      this.user = data;
    } );
  }

  public creditAccount(): void {
    // let uid = this._activatedRoute.snapshot.paramMap.get('uid');
    this._userService.creditAccountUser(this.uid, this.amount).subscribe( data => {
      // @ts-ignore
      this.user = data
    } );
  }

}
