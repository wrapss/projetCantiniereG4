import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../_services/token.service";
import {IUser} from "../../../_interfaces/user";
import {OrderService} from "../../../_services/order.service";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private tokenService: TokenService,
              private orderService: OrderService,
              private userService: UserService,
              ) { }

  userInfo : IUser = {
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
  }
  orderUnconfirmed: any = []
  ngOnInit(): void {
    const userID = this.tokenService.getUserID()
    console.log(userID)
    this.userService.getUser(userID).subscribe(
        data=> this.userInfo = data as IUser
    )


    this.orderService.getOrdersUnconfirmedByUser(userID).subscribe(
        data=> this.orderUnconfirmed = data
    )
  }


}
