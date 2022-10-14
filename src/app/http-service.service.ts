import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4000/';


  login({identified}: { identified: any }) : Observable<HttpResponse<Object>>{

    return this.http.get<HttpResponse<Object>>(`http://localhost:8080/stone.lunchtime/login?email=${identified.email}&password=${identified.password}`, {observe: 'response'}).pipe(
        tap(resp => {
          console.log('heaeder', resp.headers.get('ReturnStatus'))
        })
    );
  }

}
