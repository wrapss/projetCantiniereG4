import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CartService } from "../../_services/cart.service";
import { MenuService } from "../../_services/menu.service";
import { IMenuReduced } from "../../_interfaces/menu";
/*import {isEmpty} from "rxjs";
import {IUser} from "../../_interfaces/user";
import {IMeal} from "../../_interfaces/meal";
import { IMenu, IMenuReduced } from "../../_interfaces/menu";*/

/**
 * Component permettant d'afficher les deux différents menus proposés chaque jour de la semaine
 */
@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  /* Liste des jours de la semaine */
  public JoursSemaine: any[] = [
    { id: 1, name: 'Lundi' },
    { id: 2, name: 'Mardi' },
    { id: 3, name: 'Mercredi' },
    { id: 4, name: 'Jeudi' },
    { id: 5, name: 'Vendredi' },
  ];
  /* Menus en fonction du jour */
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

  /**
   * Permet d'afficher les 2 menus du jour, en fonction du jour de la semaine
   * @param jour jour de la semaine sur lequel filtrer les menus
   * @returns Tableau contenant les menus associés au jour passé en paramètre
   */
  public getPlatByJours(jour: any): IMenuReduced[] {
    return this.platJours.filter((f) => f.jour == jour);
  }

  /**
   * Permet d'ajouter un menu au panier
   * @param platJour menu du jour à ajouter au panier
   */
  public onSubmitCart(platJour: any): void {
    this._cartService.addToCart(platJour);
  }

}