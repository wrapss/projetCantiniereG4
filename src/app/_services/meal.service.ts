import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private _http: HttpClient) { }

  /*
  public getAllMeals(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/meal/findall\n');  // Must be connected as lunch lady to see all...
  }*/

  public getAllMeals(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/meal/findallavailableforthisweek');
  }

  public addMeal(data: any): Observable<Object> {
    return this._http.put('http://localhost:8080/stone.lunchtime/meal/add', data);
  }

  public deleteMealByID(id: number): Observable<Object> {
    return this._http.delete('http://localhost:8080/stone.lunchtime/meal/delete/' + id);
  }

  public getImageMenuByID(id: number): Observable<IApi> {
    return this._http.get('http://localhost:8080/stone.lunchtime/meal/findimg/' + id);
  }
  
}
