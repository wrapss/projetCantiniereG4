import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MealService {

    constructor(private http: HttpClient) { }

    getAllMeals(){
        return this.http.get('http://localhost:8080/stone.lunchtime/meal/findall\n')
    }

    addMeal(data: any){
        return this.http.put('http://localhost:8080/stone.lunchtime/meal/add', data)
    }

    deleteMealByID(id: any){
        return this.http.delete('http://localhost:8080/stone.lunchtime/meal/delete/'+id)

    }

    getImageMenuByID(id:number) : Observable<IApi>{
        return this.http.get('http://localhost:8080/stone.lunchtime/meal/findimg/'+id)
    }
}
export interface IApi {
}