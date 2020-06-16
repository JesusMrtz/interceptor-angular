import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-usuario': 'ABC2123445'
    });

    const requestClone = req.clone({
      headers
    });
    return next.handle(requestClone).pipe(catchError(this.error));
  }


  error(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.warn(error);
    return  throwError('Error personalizado');
  }
}
