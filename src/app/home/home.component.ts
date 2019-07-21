import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { BankData } from '../models/Product'
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../components/add-product/add-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  expandedElement: BankData | null;
  pageSize: number = 20;
  columnKeys = [];
  favoriteBanks: any[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: any[] = [
    'name',
    'price'
  ];
  constructor(private dataService: DataService, private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getProducts()
    this.subscribeProducts();
  }

  subscribeProducts() {
    this.dataService.bankList$.subscribe(
      response => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      }
    );
  }

  searchBanks(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProducts() {
    this.productService.getAll().subscribe(
      res => {
        this.dataService.handleBankList(res)
      }
    )
  }

  updateProductDialog(product) {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: product,
      panelClass: 'custom-dialog'
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.update(res.id, res.data).subscribe(
          response => {
            this.getProducts();
          }
        )
      }
    })
  }

  deleteProduct(id) {
    this.productService.delete(id).subscribe(response => {
      this.getProducts();
    })
  }
}

