import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../_services/token.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _tokenService: TokenService) { }

  public isAuth: boolean = this._tokenService.isLoggedAsAdmin();

  ngOnInit(): void { }

  public logout(): void {
    this._tokenService.clearToken();
  }
  
}
