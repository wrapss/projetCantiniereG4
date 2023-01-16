import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { OrderService } from "../../_services/order.service";

/**
 * Component permettant d'afficher la liste des commandes en cours et terminées
 */
@Component({
  selector: 'app-recap-commandes',
  templateUrl: './recap-commandes.component.html',
  styleUrls: ['./recap-commandes.component.css']
})
export class RecapCommandesComponent implements OnInit {

  /* Commandes en attente de validation */
  private _orderWaiting: any = [];
  /* Commandes terminées */
  private _ordersFinish: any = [];
  /* Jours de la semaine */
  public dayList: any = [
    {day: 'Lundi', date: this.getDateOfDay(1)},
    {day: 'Mardi', date: this.getDateOfDay(2)},
    {day: 'Mercredi', date: this.getDateOfDay(3)},
    {day: 'Jeudi', date: this.getDateOfDay(4)},
    {day: 'Vendredi', date: this.getDateOfDay(5)},
    {day: 'Samedi', date: this.getDateOfDay(6)},
    {day: 'Dimanche', date: this.getDateOfDay(0)},
  ];
  /* Alerte à afficher */
  public alert: any = {
    message: '',
    show: false,
    type: ''
  }

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderWaitingForThisWeek();
    this.getOrderFinishForThisWeek();
  }

  /**
   * Récupère la date du jour passé en paramètre
   * @param day Jour de la semaine
   * @returns Date au format "yyyy-MM-dd"
   */
  private getDateOfDay(day: any) {
    const today = new Date();
    const dateT = today.getDate() - today.getDay() + day;
    const date = new Date(today.setDate(dateT));
    const fridayDate = formatDate(date, 'yyyy-MM-dd', 'fr-FR');
    return fridayDate;
  }

  /**
   * Récupère les commandes en cours pour la semaine en cours
   */
  private getOrderWaitingForThisWeek() {
    this._orderService.getOrdersByRangeDate(this.getDateOfDay(0), this.getDateOfDay(6), 0).subscribe( data => { this._orderWaiting = data } );
  }

  /**
   * Récupère les commandes terminées pour la semaine en cours
   */
  private getOrderFinishForThisWeek() {
    this._orderService.getOrdersByRangeDate(this.getDateOfDay(0), this.getDateOfDay(6), 1).subscribe(
      data => {
        console.log(data);
        this._ordersFinish = data;
      }
    )
  }

  /**
   * Affiche un message d'alerte 
   * @param type Type de l'alerte ("succcess")
   * @param message Message affiché dans l'alerte
   * @param show Définit si l'alerte est affichée ou non
   */
  public setAlert(type: string, message: string, show: boolean) {
    this.alert.show = show;
    this.alert.message = message;
    this.alert.type = type;
  }

  /**
   * Affiche les commandes en cours pour une date donnée
   * @param date Date sur laquelle filtrer les commandes
   */
  public getOrdersWaitingByDay(date: any) {
    return this._orderWaiting.filter( (f: any) => f.creationDate == date );
  }

  /**
   * Affiche une alerte de commande livrée
   * @param id Id de la commande à livrer
   */
  public delivryOrder(id: number) {
    this._orderService.deliveryOrder(id).subscribe(
      () => {
        this.setAlert('success', 'Commande livrée!', true);
        this.getOrderWaitingForThisWeek();
      }
    )
  }
  
  /**
   * Permet d'annuler une commande
   * @param id Id de la commande à annuler
   */
  public cancelOrder(id: number) {
    this._orderService.cancelOrder(id).subscribe(
      () => {
        this.setAlert('success', 'Commande annulée!', true);
        this.getOrderWaitingForThisWeek();
      }
    )
  }

  /**
   * Affiche les commandes terminées en fonction du jour
   * @param date Date sur laquelle filtrer les commandes
   */
  public getOrdersFinishByDay(date:any) {
    return this._ordersFinish.filter( (f: any) => f.creationDate == date );
  }

}
