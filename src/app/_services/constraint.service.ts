import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IContraint} from "../_interfaces/contraint";

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  constructor(private http: HttpClient) { }

  getContraint(){
    return this.http.get('http://localhost:8080/stone.lunchtime/constraint/findall')
  }

  setConstraint(data: IContraint){
    return this.http.patch('http://localhost:8080/stone.lunchtime/constraint/update/1', data)
  }
}
