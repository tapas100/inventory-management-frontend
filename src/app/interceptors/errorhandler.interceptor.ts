import { Injectable, ErrorHandler, NgZone, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler implements  ErrorHandler {

  constructor(private snackbar:MatSnackBar,private zone:NgZone,private injector: Injector) { }
  handleError(error: Error) {
    const router = this.injector.get(Router);
    if(error['status']==401){
      this.zone.run(() => router.navigate(['/login']))
    }
    else{
      throw(error);
    }
 }
  
}