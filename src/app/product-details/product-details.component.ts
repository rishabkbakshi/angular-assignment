import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product;
  public productList;

  

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.product = apiService.defaultProduct
    this.productList = apiService.productDatabase
   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.product = this.apiService.getProductFromId(id)

  } 
}
