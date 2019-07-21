import { Component } from '@angular/core';

import { LoaderService } from './services/loader.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from './services/toast.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadComplete: boolean = false;
  isLogin: boolean = false;
  constructor(private loaderService: LoaderService,
    private auth: AuthService,
    private router: Router,
    private toast: ToastService,
    private dataService: DataService
  ) {
    this.loaderService.loadStatus$.subscribe(res => {
      setTimeout(() => {
        this.loadComplete = res;
      }, 3000)
    })
  }
  ngOnInit(): void {
    this.loaderService.handleLoader(true);
    this.suscribeLogin();
    this.isLoggedIn();
  }

  logout() {
    this.auth.logout().subscribe(res => {
      this.auth.removeToken();
      this.router.navigate(['/login'])
      this.toast.show('Logged out successfully !')
      this.dataService.handleLogin(false)
    })
  }

  suscribeLogin() {
    this.dataService.isLogin$.subscribe(res => {
      this.isLogin = res;
      console.log(res);
    })
  }

  isLoggedIn() {
    console.log('dahdakhdhakd')
    if (this.auth.isLoggedIn()) {
      console.log('dahdakhdhakd')
      this.dataService.handleLogin(true);
    }
  }
}

