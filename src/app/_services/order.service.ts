import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  public getAllOrders(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/order/findall');
  }

  public getOrdersByRangeDate(beginDate: any, endDate: any, state: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status=' + state + '&beginDate=' + beginDate + '&endDate=' + endDate);
  }

  public createOrder(userId: any): Observable<Object> {
    return this._http.put('http://localhost:8080/stone.lunchtime/order/add', {
      "userId": userId,
      "quantity": [
        {
          "quantity": 1,
          "menuId": 2,
        }
      ]
    })
  }

  public deliveryOrder(id: number): Observable<Object> {
    return this._http.patch('http://localhost:8080/stone.lunchtime/order/deliverandpay/' + id + '/1', {});
  }

  public getOrdersUnconfirmedByUser(userId: any): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/order/findallforusertoday/' + userId);
  }

  public cancelOrder(id: number): Observable<Object> {
    return this._http.patch('http://localhost:8080/stone.lunchtime/order/cancel/' + id, {});
  }
  
}
