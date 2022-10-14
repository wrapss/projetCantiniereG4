import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {TokenService} from "../../../_services/token.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  showPassword = false;

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


  showPasswordChange(){
    console.log(this.showPassword)
    if(this.showPassword){
      this.showPassword = false
    }
    this.showPassword = true
  }

  ngOnInit(): void {
    this.userInfo = this.tokenService.getUserInfo();
  }

}
