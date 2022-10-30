import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../_services/order.service";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-recap-commandes',
  templateUrl: './recap-commandes.component.html',
  styleUrls: ['./recap-commandes.component.css']
})
export class RecapCommandesComponent implements OnInit {
  constructor(private orderService: OrderService) { }


  orderWaiting: any = []

  ordersFinish: any = []

  dayList: any = [
    {day: 'Lundi', date: this.getDateOfDay(1)},
    {day: 'Mardi', date: this.getDateOfDay(2)},
    {day: 'Mercredi', date: this.getDateOfDay(3)},
    {day: 'Jeudi', date: this.getDateOfDay(4)},
    {day: 'Vendredi', date: this.getDateOfDay(5)},
    {day: 'Samedi', date: this.getDateOfDay(6)},
    {day: 'Dimanche', date: this.getDateOfDay(0)},


  ]

  ngOnInit(): void {
    this.getOrderWaitingForThisWeek()
    this.getOrderFinishForThisWeek()

  }

  getOrderWaitingForThisWeek(){
    console.log(this.getDateOfDay(0))
    this.orderService.getOrdersByRangeDate(this.getDateOfDay(-5),this.getDateOfDay(0),0).subscribe(
        data => {
          console.log(data)
          this.orderWaiting = data
        }
    )
  }

  getOrderFinishForThisWeek(){
    console.log(this.getDateOfDay(0))
    this.orderService.getOrdersByRangeDate(this.getDateOfDay(-5),this.getDateOfDay(0),1).subscribe(
        data => {
          console.log(data)
          this.ordersFinish = data
        }
    )
  }

  delivryOrder(id:number){
    this.orderService.deliveryOrder(id).subscribe(
        data => this.getOrderWaitingForThisWeek()
    )
  }
  cancelOrder(id:number){
    this.orderService.cancelOrder(id).subscribe(
        data=> this.getOrderWaitingForThisWeek()
    )
  }

  getOrdersWaitingByDay(date:any){
    return this.orderWaiting.filter((f:any) => f.creationDate == date)
  }

  getOrdersFinishByDay(date:any){
    return this.ordersFinish.filter((f:any) => f.creationDate == date)
  }


  getDateOfDay(day:any){
    const today = new Date();
    const dateT = today.getDate() - today.getDay() + day;
    const date = new Date(today.setDate(dateT));

    const fridayDate = formatDate(date, 'yyyy-MM-dd', 'fr-FR');

    return fridayDate;
  }
}
