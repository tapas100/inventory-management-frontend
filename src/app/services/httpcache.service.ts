import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

abstract class HttpCache {
   abstract get(req:HttpRequest<any>):HttpResponse<any> | null;
   abstract put(req:HttpRequest<any>,resp:HttpResponse<any>):void;
}

@Injectable({
  providedIn: 'root'
})
export class HttpcacheService implements HttpCache {
 
  private cache = {}
  constructor() { }

  get(req: HttpRequest<any>): HttpResponse<any> {
     return this.cache[req.urlWithParams];
  }
  put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
    this.cache[req.urlWithParams] = resp;
  }

  clearCache() {
    this.cache = {}
  }
}
