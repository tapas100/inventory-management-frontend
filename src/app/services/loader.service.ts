import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadStatus: Subject<any> = new Subject();
  loadStatus$: Observable<any> = this.loadStatus.asObservable();

  constructor() { }
  handleLoader(status: boolean) {
    this.loadStatus.next(status);
  }
}
