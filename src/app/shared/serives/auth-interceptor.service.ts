import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Using HttpInterceptor for all api`);
    let httpheader = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('setToken')!
    })
    let reqClone = req.clone({
      headers: httpheader
    });

    return next.handle(reqClone)
  }
}
