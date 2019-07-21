import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ProductService } from "../services/product.service";
import { MaterialModule } from '../material.module';
import { AddProductComponent } from './add-product/add-product.component';
import { RatingModule } from 'ng-starrating';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule
  ],
  declarations: [
    SearchBarComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports:[SearchBarComponent],
  providers:[DataService,ProductService],
  entryComponents:[AddProductComponent]
})
export class ComponentsModule { }
