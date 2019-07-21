import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast.service';

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchClicked = new EventEmitter<any>()
  searchInput: any;
  constructor(private dialog: MatDialog, private productService: ProductService, private dataService: DataService,private taost:ToastService) {
    this.searchClicked = new EventEmitter()
  }

  ngOnInit() {
  }

  searchEvent() {
    this.searchClicked.emit(this.searchInput)
  }

  addProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: '',
      panelClass: 'custom-dialog'
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.create(res.data).subscribe(
          response => {
            this.getProducts();
            this.taost.show('Product Added Sucessfully !')
          }
        )
      }
    })
  }


  getProducts() {
    this.productService.getAll().subscribe(
      response => {
        this.dataService.handleBankList(response);
      }
    )
  }
}
