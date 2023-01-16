import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../../_services/token.service";
import { OrderService } from "../../../_services/order.service";
import { UserService } from "../../../_services/user.service";
import { IUser } from "../../../_interfaces/user";

/**
 * Component permettant d'afficher les informations d'un compte utilisateur
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /* Informations de l'utilisateur */
  public userInfo!: IUser;
  /* Commandes en attente de validation par l'utilisateur */
  public orderUnconfirmed: any = [];

  constructor(private _tokenService: TokenService,
              private _orderService: OrderService,
              private _userService: UserService) { }

  ngOnInit(): void {
    const userID = this._tokenService.getUserID()
    console.log(userID)
    this._userService.getUser(userID).subscribe(
      data => this.userInfo = data as IUser
    );
    this._orderService.getOrdersUnconfirmedByUser(userID).subscribe(
        data => this.orderUnconfirmed = data
    );
  }

}
