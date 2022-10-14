import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
}
