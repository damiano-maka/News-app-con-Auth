import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) {
      request = request.clone({
        setHeaders: { 'Authorization': `Bearer ${accessToken}`}
      })
    }

    return next.handle(request);
  } 
}
