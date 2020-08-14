import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product = {}

  productList = [
    {
      productId : 1,
      productName :'Nokia 5.1 Plus',
      price : '8999',
      image_url: "https://static.bhphoto.com/images/images1000x1000/1550056325_1458601.jpg",
      description: "Nokia 3GB/32GB"
    },
    {
      productId : 2,
      productName :'Samsung A10s',
      price : '10999',
      image_url: "https://images-na.ssl-images-amazon.com/images/I/61OhSCY69kL._AC_SX425_.jpg",
      description: "Samsung 3GB/32GB"
    },
    {
      productId : 3,
      productName :'Redmi Mi note 5 pro',
      price : '12999',
      image_url: "https://s3b.cashify.in/gpro/uploads/2019/06/04132534/xiaomi-redmi-note-5-pro-001.jpg",
      description: "Redmi 3GB/32GB"
    },
    {
      productId : 4,
      productName :'Vivo V2',
      price : '9500',
      image_url: "https://images-na.ssl-images-amazon.com/images/I/811qRrZQ-zL._AC_SL1500_.jpg",
      description: "Vivo 3GB/32GB"
    }
  ]

  getProductFromId(id){
    for(let i=0; i<this.productList.length; i++){
      console.log("compare",i,this.productList[i]["productId"], id)
      if(this.productList[i]["productId"] === id){
        return this.productList[i]
      }
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hello",this.route.snapshot.paramMap)

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.product = this.getProductFromId(id)
    console.log(this.product)

  } 
}
