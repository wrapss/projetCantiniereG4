import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_services/cart.service";
import {IDataMenu, IMenu} from "../../_interfaces/menu";
import {IUser} from "../../_interfaces/user";
import {IMeal} from "../../_interfaces/meal";
import {MenuService} from "../../_services/menu.service";
import { DatePipe } from '@angular/common';
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  constructor(private cartService: CartService,
              private menuService: MenuService,
              private datepipe: DatePipe) { }

  JoursSemaine = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];

  platJours: IMenu2[] = [
    {id:1, label: 'Menu 1', priceDF: '50', jours: 'Lundi'},
    {id:2, label: 'Menu 2', priceDF: '25', jours: 'Lundi'},
    {id:3, label: 'Menu 3', priceDF: '12', jours: 'Mardi'},
    {id:4, label: 'Menu 1', priceDF: '50', jours: 'Jeudi'},
    {id:5, label: 'Menu 2', priceDF: '25', jours: 'Jeudi'},
    {id:6, label: 'Menu 3', priceDF: '12', jours: 'Vendredi'},
  ]
  menusLundi: any = []
  menusMardi: any = []
  menusMercredi: any = []
  menusJeudi: any = []
  menusVendredi: any = []

  menuTest: any = []

  ngOnInit(): void {
    let weekNumber = this.datepipe.transform(new Date(), 'w');
    this.JoursSemaine.map((item) =>{
       this.menuService.getAllMenusByWeekAndDay(weekNumber,item.id).subscribe(
          data =>{
            if(Object.keys(data).length !== 0){
              console.log(data)
            }
          }
      )
    })
    //this.getMenusByWeekandDay()
  }

  onSubmitCart(platJour: any){
    this.cartService.addToCart(platJour)
  }

  getMenusByWeekandDay(week:number, day:number){
    return this.menuService.getAllMenusByWeekAndDay(week,day).subscribe(
        data =>{
          return data
        }
    )
  }

  getPlatByJours(jours : any){
    return this.platJours.filter((f) => f.jours == jours)
  }
}
export interface IMenu2{
  id: number,
  label: string,
  priceDF: string,
  jours: string
}