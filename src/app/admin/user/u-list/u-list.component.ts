import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-u-list',
  templateUrl: './u-list.component.html',
  styleUrls: ['./u-list.component.css']
})
export class UListComponent implements OnInit {

  userList: IUser[] = []

  displayedColumns: string[] = ['firstname', 'name', 'email', 'star'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
        data => {
          // @ts-ignore
          this.userList = data
        }
    )
  }

}
