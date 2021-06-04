import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/app/modal/product';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product(0,"",0,"",0);
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

  addProduct(): void {
    
    console.log("ppppp...",this.product);
    this.httpClientService.saveProduct(this.product)
        .subscribe( res => {
          alert("Product added successfully.");
        });

    
  }

}
