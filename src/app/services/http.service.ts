import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl: string;

  constructor(
    public http: HttpClient, private route: ActivatedRoute
  ) {
    this.baseUrl = environment.baseUrl;
  }
  addHeaders() {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return headers;
  }


  private getQueryString(queryObject = {}) {
    if (queryObject = {}) {
      queryObject = this.route.snapshot.queryParamMap;
    }
    var queryString = Object.keys(queryObject)
      .map(function (key) {
        if (queryObject[key]) {
          return key + "=" + queryObject[key];
        } else {
          return "";
        }
      })
      .join("&");
    if (queryString) {
      return "?" + queryString;
    } else {
      return "";
    }
  }

  get(resource: string, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    let url = this.baseUrl + resource
    return this.http.get(url,
      {
        headers: headers
      });
  }
  post(resource: string, data: any, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    let url = this.baseUrl + resource + this.getQueryString(queryStringObject);
    return this.http.post(url, data,
      {
        headers: headers,
      });
  }




  put(resource: string, data: any, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    let url = this.baseUrl + resource + this.getQueryString(queryStringObject);
    return this.http.put(url, data,
      {
        headers: headers
      });
  }

  delete(resource: string, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    let url = this.baseUrl + resource + this.getQueryString(queryStringObject);

    return this.http.delete(url,
      {
        headers: headers
      });
  }
}
