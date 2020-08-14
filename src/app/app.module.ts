import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';  
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DefaultColorOnEventDirective } from './directives/color.directive';
import { NewemployeeComponent } from './newemployee/newemployee.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent,
    DefaultColorOnEventDirective,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
