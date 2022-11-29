import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {TokenService} from "../../../_services/token.service";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private userService: UserService
  ) { }

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
    imageId: 0,

    wallet: 0,
    registrationDate: '',
    status: ''
  }
  userID:any =  0

  showPasswordChange(){
    console.log(this.showPassword)
    if(this.showPassword){
      this.showPassword = false
    }
    this.showPassword = true
  }

  editUser(){
    this.userService.editUser(this.userInfo.id,this.userInfo).subscribe(
        data=> console.log(data)
    )
  }

  ngOnInit(): void {
    var userID = this.tokenService.getUserID();
    this.userService.getUser(Number(userID)).subscribe(
        data=> this.userInfo =data as IUser
    )

  }

}
