import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";
import {IUser} from "../../_interfaces/user";

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

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
