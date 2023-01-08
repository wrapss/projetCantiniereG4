import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../_interfaces/user";
import { UserService } from "../../../_services/user.service";

@Component({
  selector: 'app-u-list',
  templateUrl: './u-list.component.html',
  styleUrls: ['./u-list.component.css']
})
export class UListComponent implements OnInit {
  
  public userList: IUser[] = [];
  public displayedColumns: string[] = ['firstname', 'lastname', 'email', 'details'];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      data => {
        // @ts-ignore
        this.userList = data
      }
    );
  }

}