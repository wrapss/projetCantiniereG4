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
  amount: number = 0;


  constructor(
      private activated: ActivatedRoute,
      private userService: UserService
  ) { }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid')

    console.log(uid)
    this.userService.getUser(Number(uid)).subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

  soldeAccount(){
    let uid = this.activated.snapshot.paramMap.get('uid')

    this.userService.soldeAccountUser(uid,this.amount).subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

  creditAccount(){
    let uid = this.activated.snapshot.paramMap.get('uid')

    this.userService.creditAccountUser(uid,this.amount).subscribe(
        data => {
          // @ts-ignore
          this.user = data
        }
    )
  }

}
