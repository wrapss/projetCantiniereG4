import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CartService } from "../../_services/cart.service";
import { MenuService } from "../../_services/menu.service";
import { IMenuReduced } from "../../_interfaces/menu";
/*import {isEmpty} from "rxjs";
import {IUser} from "../../_interfaces/user";
import {IMeal} from "../../_interfaces/meal";
import { IMenu, IMenuReduced } from "../../_interfaces/menu";*/

@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  public JoursSemaine: any[] = [
    { id: 1, name: 'Lundi' },
    { id: 2, name: 'Mardi' },
    { id: 3, name: 'Mercredi' },
    { id: 4, name: 'Jeudi' },
    { id: 5, name: 'Vendredi' },
  ];
  public platJours: IMenuReduced[] = [
    { id: 1, label: 'Menu 1', priceDF: '13', jour: 'Lundi' },  // Why défini comme ça ? Dans les consignes ?
    { id: 2, label: 'Menu 2', priceDF: '17', jour: 'Lundi' },
    { id: 3, label: 'Menu 1', priceDF: '13', jour: 'Mardi' },
    { id: 4, label: 'Menu 2', priceDF: '17', jour: 'Mardi' },
    { id: 5, label: 'Menu 1', priceDF: '13', jour: 'Mercredi' },
    { id: 6, label: 'Menu 2', priceDF: '17', jour: 'Mercredi' },
    { id: 7, label: 'Menu 1', priceDF: '13', jour: 'Jeudi' },
    { id: 8, label: 'Menu 2', priceDF: '17', jour: 'Jeudi' },
    { id: 9, label: 'Menu 1', priceDF: '13', jour: 'Vendredi' },
    { id: 10, label: 'Menu 2', priceDF: '17', jour: 'Vendredi' },
  ];

  constructor(private _cartService: CartService,
              private _menuService: MenuService,
              private _datepipe: DatePipe) { }

  ngOnInit(): void {
    let weekNumber = this._datepipe.transform(new Date(), 'w');
    this.JoursSemaine.map((item) => {
      this._menuService.getAllMenusByWeekAndDay(weekNumber, item.id).subscribe(
        data => {
          if (Object.keys(data).length !== 0) {
            console.log(data);
          }
        }
      )
    })
    //this.getMenusByWeekandDay()
  }

  // public getMenusByWeekandDay(week: number, day: number): any {
  //   return this._menuService.getAllMenusByWeekAndDay(week, day).subscribe(
  //     data => {
  //       return data;
  //     }
  //   )
  // }

  public getPlatByJours(jour: any): IMenuReduced[] {
    return this.platJours.filter((f) => f.jour == jour);
  }

  public onSubmitCart(platJour: any): void {
    this._cartService.addToCart(platJour);
  }

}