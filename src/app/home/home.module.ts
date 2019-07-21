import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { DataService } from '../services/data.service';
import { ProductService } from "../services/product.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { RatingModule } from 'ng-starrating';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MaterialModule,
    RatingModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent],
  providers:[DataService,ProductService]
})
export class HomeModule { }
