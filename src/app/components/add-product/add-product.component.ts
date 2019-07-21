import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup
  rating = 0;
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _fb:FormBuilder) { }

  submit(){
    let tempObj = new Object()
    tempObj['data']  = this.productForm.value;
    tempObj['data']['rating'] = this.rating;
    tempObj['id'] = this.data._id
    this.dialogRef.close(tempObj);
  }

  dismiss(){
     this.dialogRef.close(null)
  }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.productForm = this._fb.group({
       name:['',Validators.required],
       price:['',Validators.required]
    })
    this.productForm.patchValue(this.data);
    this.rating = this.data.rating ? this.data.rating : 0;
  }

  isValidated(){
     return this.productForm.valid && this.rating !=0 ? true :false;
  }

  onRate(event){
    console.log(event);
    this.rating = event.newValue; 
  }
}
