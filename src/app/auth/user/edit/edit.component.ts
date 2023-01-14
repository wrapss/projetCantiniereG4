import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../_interfaces/user";
import { TokenService } from "../../../_services/token.service";
import { UserService } from "../../../_services/user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
    imageId: 0,
    wallet: 0,
    registrationDate: '',
    status: ''
  }
  userID: any = 0;
  */
  public userInfo!: IUser;
  public showPassword: boolean = false;

  constructor(private _tokenService: TokenService,
              private _userService: UserService) { }

  ngOnInit(): void {
    let userID = this._tokenService.getUserID();
    this._userService.getUser(Number(userID)).subscribe(
      data => this.userInfo = data as IUser
    );
  }

  public showPasswordChange(): boolean {
    console.log(this.showPassword);
    if (this.showPassword) {
      return this.showPassword = false;
    }
    return this.showPassword = true;
  }

  public editUser(): void {
    this._userService.editUser(this.userInfo.id, this.userInfo).subscribe(
      data => console.log(data)
    );
  }

}
