import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  productList = [
    {
      productId : 1,
      productName :'Nokia 5.1 Plus',
      price : '8999',
      image_url: ""
    },
    {
      productId : 2,
      productName :'Samsung A10s',
      price : '10999',
      image_url: ""
    },
    {
      productId : 3,
      productName :'Redmi Mi note 5 pro',
      price : '12999',
      image_url: ""
    },
    {
      productId : 4,
      productName :'Vivo V2',
      price : '9500',
      image_url: ""
    }
  ]


  viewDetail(product){
    this.router.navigate(['/products', product.productId])
  }

}
