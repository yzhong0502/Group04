import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
//to deal with headers when doing http request
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem("token");
    if (token) {
      const clonedRequest = request.clone({
        setHeaders : {
          authorization : token
        }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
