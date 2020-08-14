import { Component, OnInit } from '@angular/core';
import { Employee2 } from 'src/app/newemployee/employee2';

import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor( private apiService: ApiService) { }

  emp2Data = []

  ngOnInit(): void {
    this.apiService.fetchData().subscribe(empData => {
      this.emp2Data = empData.data
      console.log(this.emp2Data)
    })
  }





}
