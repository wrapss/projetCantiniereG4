import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_services/cart.service";
import {TokenService} from "../../_services/token.service";
import {UserService} from "../../_services/user.service";
import {IUser} from "../../_interfaces/user";
import {OrderService} from "../../_services/order.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  user: IUser = {
    id: 0,
    firstname: '',
    name: '',
    email: '',
    phone: '',
    sex: 0,
    address: '',
    postalCode: '',
    town: '',
    isLunchLady: 0,
    wallet: 0,
    imageId: 0,
    registrationDate: '',
    status: ''
  }

  JoursSemaine = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];


  alert =  {
    message: '',
    show: false,
    type: ''
  }

  constructor(protected cartService: CartService,
              protected tokenService: TokenService,
              protected userService: UserService,
              protected orderService: OrderService
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

  setAlert(type:string, message:string, show:boolean){
    this.alert.show = show
    this.alert.message = message
    this.alert.type = type
  }

  confirmOrder(){
    this.setAlert('','',false)
    let userId = this.tokenService.getUserInfo().id;
    this.userService.getUser(userId).subscribe(
        data => {
          // @ts-ignore
          let user = data
          let total = this.cartService.getTotalBalanceCart();
          let panier = this.cartService.getLocalCartProducts();
          if(panier.length !== 0){
            // @ts-ignore
            if(user.wallet >= total){
              // @ts-ignore
              this.orderService.createOrder(user.id).subscribe(
                  data => {
                    console.log(data)
                    this.cartService.removeLocalCart()
                    this.setAlert('success',`Commande validé`,true)
                  },
                  error => {
                    console.log(error)
                    this.setAlert('danger',`Heure de commande dépassé`,true)
                  }
              )
            }else{
              this.setAlert('danger',`Votre n'avez pas assez de crédit`,true)
            }
          }else{
            this.setAlert('danger','Votre panier est vide!',true)
          }
        }
    )
  }

}
