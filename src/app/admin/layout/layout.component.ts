import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  public isAuth: boolean = this.tokenService.isLoggedAsAdmin();

  ngOnInit(): void {
  }
  logout(): void{
    this.tokenService.clearToken()
  }
}
