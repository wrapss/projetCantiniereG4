// http://localhost:8080/stone.lunchtime/order/findall

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }

    getAllOrders(){
        return this.http.get('http://localhost:8080/stone.lunchtime/order/findall')
    }

    getOrdersByRangeDate(beginDate:any, endDate:any,state:number){
        return this.http.get('http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status='+state+'&beginDate='+beginDate+'&endDate='+endDate)
    }

    createOrder(userId:any){
        return this.http.put('http://localhost:8080/stone.lunchtime/order/add',{
            "userId": userId,
            "quantity": [
                {
                    "quantity": 1,
                    "menuId": 2
                }
            ]
        })
    }

    deliveryOrder(id:number){
        return this.http.patch('http://localhost:8080/stone.lunchtime/order/deliverandpay/'+id+'/1',{});
    }

    getOrdersUnconfirmedByUser(userId:any){
        return this.http.get('http://localhost:8080/stone.lunchtime/order/findallforusertoday/'+userId);
    }
    cancelOrder(id:number){
        return this.http.patch('http://localhost:8080/stone.lunchtime/order/cancel/'+id,{});
    }
}
