import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap} from 'rxjs/operators';
import { HttpcacheService } from '../services/httpcache.service';
@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {
  cache: any;
  constructor(private cahceService: HttpcacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if(req.method == 'POST' || req.method == 'PUT' || req.method == 'DELETE'){this.cahceService.clearCache()}
    const cachedResponse = this.cahceService.get(req);
    return cachedResponse
      ? of(cachedResponse)
      : this.sendRequest(req, next);

  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cahceService.put(req, event);
        }
      })
    );
  }
}
