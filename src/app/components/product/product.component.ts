import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public data = [
    {name: 'Ajay', quantity: '5', company:'therichpost.com',price:'22'},
    {name: 'Jas', quantity: '52', company:'therichpost.com' ,price:'22'},
   {name: 'therichpost', quantity: '65', company:'therichpost.com',price:'22'},
    {name: 'therichpost', quantity: '1', company:'therichpost.com',price:'22'},
    {name: 'Jas', quantity: '22', company:'therichpost.com',price:'22'},
    {name: 'therichpost', quantity: '15', company:'therichpost.com',price:'22'},
    {name: 'therichpost', quantity: '8', company:'therichpost.com',price:'22'},
    {name: 'Jas', quantity: '17', company:'therichpost.com',price:'22'},
    {name: 'therichpost', quantity: '3', company:'therichpost.com',price:'22'},
    {name: 'therichpost', quantity: '11', company:'therichpost.com',price:'22'},
  ];
dtOptions: any = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
    lengthMenu : [5, 10, 25],
      processing: true
    };

  }

}
