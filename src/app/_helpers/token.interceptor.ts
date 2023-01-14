import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._tokenService.getToken();
    if(token !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', token)
      });
      return next.handle(clone).pipe(
        catchError(error => {
          if(error.status === 401) {
            this._tokenService.clearToken();
          }
          // return throwError('Session Expired');
          return throwError(() => new Error ('Session Expired'));
        })
      );
    }
    return next.handle(request);
  }
}


export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
