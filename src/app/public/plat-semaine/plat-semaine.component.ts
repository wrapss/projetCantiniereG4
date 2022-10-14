import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_services/cart.service";
import {IDataMenu, IMenu} from "../../_interfaces/menu";
import {IUser} from "../../_interfaces/user";

@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  constructor(private cartService: CartService ) { }

  JoursSemaine = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];

  platJours: IMenu[] = [
    {id:1, label: 'Menu 1', priceDF: '50', jours: 'Lundi'},
    {id:2, label: 'Menu 2', priceDF: '25', jours: 'Lundi'},
    {id:3, label: 'Menu 3', priceDF: '12', jours: 'Mardi'},
    {id:4, label: 'Menu 1', priceDF: '50', jours: 'Jeudi'},
    {id:5, label: 'Menu 2', priceDF: '25', jours: 'Jeudi'},
    {id:6, label: 'Menu 3', priceDF: '12', jours: 'Vendredi'},
  ]


  ngOnInit(): void {
    console.log(this.getPlatByJours('Lundi'))
  }

  onSubmitCart(platJour: IMenu){
    this.cartService.addToCart(platJour)
  }

  getPlatByJours(jours : any){
    return this.platJours.filter((f) => f.jours == jours)
  }

}
