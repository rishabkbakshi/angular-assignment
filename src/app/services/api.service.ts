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

  fetchData(): Observable<any> {
    return this.http.get(apiUrl)
  }



}
