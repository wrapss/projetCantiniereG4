import { Component, OnInit } from '@angular/core';
import { CartService } from "../../_services/cart.service";
import { TokenService } from "../../_services/token.service";
import { UserService } from "../../_services/user.service";
import { OrderService } from "../../_services/order.service";
import { IMenuReduced } from '../../_interfaces/menu';

/**
 * Component permettant d'afficher le contenu du panier d'un utilisateur
 */
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  /* Liste des jours de la semaine */
  public joursSemaine: any[] = [
    { id: 1, name: "Lundi" },
    { id: 2, name: "Mardi" },
    { id: 3, name: "Mercredi" },
    { id: 4, name: "Jeudi" },
    { id: 5, name: "Vendredi" },
  ];
  /* Alerte à afficher */
  public alert: any =  {
    message: "",
    show: false,
    type: ""
  }
  /* Montant total du panier */
  public cardBalance!: number;
  /* Id de l'utilisateur connecté */
  private _userId!: number;

  constructor(private _cartService: CartService,
              private _tokenService: TokenService,
              private _userService: UserService,
              private _orderService: OrderService) { }

  ngOnInit(): void {
    this._userId = +this._tokenService.getUserInfo().id;
    this.cardBalance = this._cartService.getTotalBalanceCart();
  }

  /**
   * Affiche un message d'alerte 
   * @param type Type de l'alerte : "succcess" ou "danger"
   * @param message Message affiché dans l'alerte
   * @param show Définit si l'alerte est affichée ou non
   */
  public setAlert(type: string, message: string, show: boolean) {
    this.alert.type = type;
    this.alert.message = message;
    this.alert.show = show;
  }

  /**
   * Permet d'afficher les menus présents dans le panier de l'utilisateur en fonction du jour
   * @param jour Jour du menu à récupérer
   * @returns Tableau contenant les menus associés au jour passé en paramètre
   */
  public getPlatByJours(jour: string): IMenuReduced[] {
    let menu: IMenuReduced[] = this._cartService.getLocalCartProducts().filter( (f) => f.jour == jour );
    // console.log("menu IMenuReduced[]", menu);
    return menu;
    // return this._cartService.getLocalCartProducts().filter( (f) => f.jours == jour );
  }

  /**
   * Permet de supprimer un menu du panier
   * @param id Id du menu à supprimer du panier
   */
  public removeCartItem(id: number): void {
    this._cartService.removeLocalCartProduct(id);
  }

  /**
   * Vérifie si l'utilisateur connecté a le rôle "utilisateur" 
   * @returns true si l'utilisateur connecté est "utilisateur", false sinon
   */
  public userLogged(): boolean {
    return this._tokenService.isLoggedAsUser();
  }

  /**
   * Vérifie si l'utilisateur connecté a le rôle "administrateur" (lunch lady)
   * @returns true si l'utilisateur connecté est "administrateur", false sinon
   */
  public adminLogged(): boolean {
    return this._tokenService.isLoggedAsAdmin();
  }

  /**
   * Fonction permettant de valider la commande d'un utilisateur. 
   * Si la cagnote de l'utilisateur est suffisante, la commande est validée. Sinon, un message d'erreur est affiché.
   */
  public confirmOrder(): void {
    this.setAlert("", "", false);
    this._userService.getUser(this._userId).subscribe(
      data => {
        let user = data;
        let total = this._cartService.getTotalBalanceCart();
        let panier = this._cartService.getLocalCartProducts();
        if (panier.length !== 0) {
          // @ts-ignore
          if (user.wallet >= total) {
            // @ts-ignore
            this._orderService.createOrder(user.id).subscribe(
              (data: any) => {
                console.log("_orderService.createOrder(user.id)", data);
                this._cartService.removeLocalCart();
                this.setAlert("success", "Commande validée", true);
              },
              (error: any) => {
                console.log(error);
                this.setAlert("danger", "Heure de commande dépassée", true);
              }
            )
          } else {
            this.setAlert("danger", "Crédits insuffisants, commande impossible", true);
          }
        } else {
          this.setAlert("danger", "Votre panier est vide !", true);
        }
      }
    )
  }

}
