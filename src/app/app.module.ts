import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { HttpcacheService } from './services/httpcache.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { MaterialModule } from './material.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { ToastService } from './services/toast.service';
import { ErrorsHandler } from './interceptors/errorhandler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [LoaderService, HttpService, HttpcacheService,ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler, 
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
