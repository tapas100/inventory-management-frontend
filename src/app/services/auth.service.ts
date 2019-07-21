import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
const TOKEN = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpService) { }


  login(data){
     return  this.http.post('account/login',data);
  }

  register(data){
     return this.http.post('account/register',data)
  }

  logout(){
     return this.http.get('account/logout')
  }

  isLoggedIn(){
    return localStorage.getItem(TOKEN) != null;
  }
  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken(){
    return localStorage.getItem(TOKEN);
  }

  removeToken(){
     localStorage.clear();
  }
}
