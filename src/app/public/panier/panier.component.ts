import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_services/cart.service";
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  JoursSemaine = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];

  constructor(protected cartService: CartService,
              protected tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cartService.getTotalBalanceCart()
  }

  removeCartItem(id: any){
    this.cartService.removeLocalCartProduct(id)
  }

  getPlatByJours(jours : any){
    return this.cartService.getLocalCartProducts().filter((f) => f.jours == jours)
  }

}
