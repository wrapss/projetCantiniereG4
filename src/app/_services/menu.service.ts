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

    getMenuById(Id: number){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/find/'+Id)
    }

    getMenuImageById(Id: number){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findimg/'+Id)
    }
    getAllMenusByWeekAndDay(week:any, day:number){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforweekandday/'+week+'/'+day)
    }

    getAllMenusByWeek(week:number){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforweek/'+week)
    }

    getAllMenusForThisDay(){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findallavailablefortoday')
    }

    getAllMenusForThisWeek(){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforthisweek')
    }

    addMenu(newMenu:any){
        return this.http.put('http://localhost:8080/stone.lunchtime/menu/add',newMenu)
    }

    getImageMenuByID(id:number){
        return this.http.get('http://localhost:8080/stone.lunchtime/menu/findimg/'+id)
    }
}
