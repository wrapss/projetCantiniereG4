import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient) { }

  public getAllMenus(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findall');
  }

  public getMenuById(Id: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/find/' + Id);
  }

  public getMenuImageById(Id: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findimg/' + Id);
  }
  
  public getAllMenusByWeekAndDay(week: any, day: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforweekandday/' + week + '/' + day);
  }

  public getAllMenusByWeek(week: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforweek/' + week);
  }

  public getAllMenusForThisDay(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findallavailablefortoday');
  }

  public getAllMenusForThisWeek(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findallavailableforthisweek');
  }

  public addMenu(newMenu: any): Observable<Object> {
    return this._http.put('http://localhost:8080/stone.lunchtime/menu/add', newMenu);
  }

  public getImageMenuByID(id: number): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/menu/findimg/' + id);
  }
  
}
