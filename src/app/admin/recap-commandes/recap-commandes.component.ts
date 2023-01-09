import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { OrderService } from "../../_services/order.service";

@Component({
  selector: 'app-recap-commandes',
  templateUrl: './recap-commandes.component.html',
  styleUrls: ['./recap-commandes.component.css']
})
export class RecapCommandesComponent implements OnInit {

  private _orderWaiting: any = [];
  private _ordersFinish: any = [];
  public dayList: any = [
    {day: 'Lundi', date: this.getDateOfDay(1)},
    {day: 'Mardi', date: this.getDateOfDay(2)},
    {day: 'Mercredi', date: this.getDateOfDay(3)},
    {day: 'Jeudi', date: this.getDateOfDay(4)},
    {day: 'Vendredi', date: this.getDateOfDay(5)},
    {day: 'Samedi', date: this.getDateOfDay(6)},
    {day: 'Dimanche', date: this.getDateOfDay(0)},
  ];
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

  setAlert(type: string, message: string, show: boolean) {
    this.alert.show = show;
    this.alert.message = message;
    this.alert.type = type;
  }

  getOrderWaitingForThisWeek() {
    this._orderService.getOrdersByRangeDate(this.getDateOfDay(0), this.getDateOfDay(6), 0).subscribe( data => { this._orderWaiting = data } );
  }

  getOrderFinishForThisWeek() {
    this._orderService.getOrdersByRangeDate(this.getDateOfDay(0), this.getDateOfDay(6), 1).subscribe(
      data => {
        console.log(data);
        this._ordersFinish = data;
      }
    )
  }

  delivryOrder(id: number) {
    this._orderService.deliveryOrder(id).subscribe(
      () => {
        this.setAlert('success', 'Commande livrée!', true);
        this.getOrderWaitingForThisWeek();
      }
    )
  }
  
  cancelOrder(id: number) {
    this._orderService.cancelOrder(id).subscribe(
      () => {
        this.setAlert('success', 'Commande annulée!', true);
        this.getOrderWaitingForThisWeek();
      }
    )
  }

  getOrdersWaitingByDay(date: any) {
    return this._orderWaiting.filter( (f: any) => f.creationDate == date );
  }

  getOrdersFinishByDay(date:any){
    return this._ordersFinish.filter( (f: any) => f.creationDate == date );
  }

  getDateOfDay(day: any) {
    const today = new Date();
    const dateT = today.getDate() - today.getDay() + day;
    const date = new Date(today.setDate(dateT));
    const fridayDate = formatDate(date, 'yyyy-MM-dd', 'fr-FR');
    return fridayDate;
  }
}
