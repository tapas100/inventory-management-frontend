import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {

  innventoryList: Subject<any> = new Subject();
  inventoryList$: Observable<any> = this.innventoryList.asObservable()

  isLogin : Subject<any> = new Subject();
  isLogin$ : Observable<any> = this.isLogin.asObservable()
  constructor() { }

  handleBankList(data: any) {
    this.innventoryList.next(data)
  }

  handleLogin(login_status:boolean){
     this.isLogin.next(login_status)
  }
}
