import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProduct(){
    return this.http.get<any>('/assets/archivosConfi/product.json')
    .toPromise()
    .then(res=><Product[]>res.data)
    .then(data =>{return data;});
  }



 
}
