import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../_interfaces/user";

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  user: IUser = {
    id: 0,
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


  constructor(
      private activated: ActivatedRoute,
      private userService: UserService
  ) { }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid')
    this.userService.getUser(uid).subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

  soldeAccount(){
    this.userService.soldeAccountUser().subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

  creditAccount(){
    this.userService.creditAccountUser().subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

}
