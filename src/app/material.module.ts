import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatCheckboxModule, MatListModule, MatButtonModule, MatRippleModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatTableModule, MatSlideToggleModule, MatCardModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
