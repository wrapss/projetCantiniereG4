import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../_services/token.service";
import {IUser} from "../../../_interfaces/user";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private tokenService: TokenService) { }

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
  ngOnInit(): void {
    this.userInfo = this.tokenService.getUserInfo();

  }

}
