import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../../_services/token.service";
import { OrderService } from "../../../_services/order.service";
import { UserService } from "../../../_services/user.service";
import { IUser } from "../../../_interfaces/user";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /*userInfo : IUser = {
    id:0,
    firstname: '',
    name: '',
    email: '',
    phone: '',
    sex: 0,
    address: '',
    postalCode: '',
    town: '',
    isLunchLady: 0,
    wallet: 0,
    imageId: 0,
    registrationDate: '',
    status: ''
  }*/ 
  public userInfo!: IUser;
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
