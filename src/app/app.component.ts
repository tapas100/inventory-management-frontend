import { Component } from '@angular/core';

import { LoaderService } from './services/loader.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadComplete: boolean = false;
  constructor(private loaderService: LoaderService, private auth:AuthService,private router:Router,private toast:ToastService) {
    this.loaderService.loadStatus$.subscribe(res => {
      setTimeout(() => {
        this.loadComplete = res;
      },3000)
    })
  }
  ngOnInit(): void {
     
    this.loaderService.handleLoader(true);
    
  }

  logout(){
     this.auth.logout().subscribe(res=>{
          this.auth.removeToken();
          this.router.navigate(['/login'])
          this.toast.show('Logged out successfully !')

     })
  }
}

