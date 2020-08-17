import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList;

  viewDetail(product){
    console.log(product)
    this.router.navigate(['/products', product.productId])
  }

  constructor(private router:Router, private apiService: ApiService) {

    this.productList = apiService.productDatabase
   }

  ngOnInit(): void {  }

  
}
