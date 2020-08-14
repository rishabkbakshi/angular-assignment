import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NewemployeeComponent} from 'src/app/newemployee/newemployee.component';

@Injectable({
  providedIn: NewemployeeComponent
})

export class ApiService {
  constructor() { }
}
