import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewemployeeComponent } from 'src/app/newemployee/newemployee.component';
import { Employee2 } from 'src/app/newemployee/employee2';

const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"

@Injectable({
  providedIn: "root"  
})

export class ApiService {
  constructor( private http:HttpClient ) { }

  defaultProduct = {
    productId : 1,
    productName :'Nokia 5.1 Plus',
    price : '8999',
    image_url: "../assets/images/nokia.jpg",
    description: "Nokia 3GB/32GB"
  }

  productDatabase = [
    {
      productId : 1,
      productName :'Nokia 5.1 Plus',
      price : '8999',
      image_url: "../assets/images/nokia.jpg",
      description: "Nokia 3GB/32GB"
    },
    {
      productId : 2,
      productName :'Samsung A10s',
      price : '10999',
      image_url: "../assets/images/samsung.jpg",
      description: "Samsung 3GB/32GB"
    },
    {
      productId : 3,
      productName :'Redmi Mi note 5 pro',
      price : '12999',
      image_url: "../assets/images/redmi.jpg",
      description: "Redmi 3GB/32GB"
    },
    {
      productId : 4,
      productName :'Vivo V2',
      price : '9500',
      image_url: "../assets/images/vivo.jpg",
      description: "Vivo 3GB/32GB"
    }
  ]

  getProductFromId(id){
    for(let i=0; i<this.productDatabase.length; i++){
      if(this.productDatabase[i]["productId"] === id){
        return this.productDatabase[i]
      }
    }
  }

  // getProductFromId(id){
  //   for(let i=0; i<this.productList.length; i++){
  //     console.log("compare",i,this.productList[i]["productId"], id)
  //     if(this.productList[i]["productId"] === id){
  //       return this.productList[i]
  //     }
  //   }
  // }

  fetchData(): Observable<any> {
    return this.http.get(apiUrl)
  }



}
