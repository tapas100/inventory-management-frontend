import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpService) { }

  getAll(){
    return this.http.get('product/all')
  }

  create(data){
     return this.http.post('product/create',data)
  }

  update(id,data){
     return this.http.put('product/update/'+id,data)
  }

  delete(id){
     return this.http.delete('product/delete/'+id)
  }
}