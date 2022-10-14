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
}
