import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private http: HttpClient) { }

    getAllMenus(){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findall')
    }
}
