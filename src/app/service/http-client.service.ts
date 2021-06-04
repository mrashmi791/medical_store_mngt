import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modal/product';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public saveProduct(product: Product) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/products/save-product",product);
  }
}
