import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IContraint } from "../_interfaces/contraint";

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  constructor(private _http: HttpClient) { }

  public getContraint(): Observable<Object> {
    return this._http.get('http://localhost:8080/stone.lunchtime/constraint/findall');
  }

  public setConstraint(data: IContraint): Observable<Object> {
    return this._http.patch('http://localhost:8080/stone.lunchtime/constraint/update/1', data);
  }
  
}
