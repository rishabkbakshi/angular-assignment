import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';  
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DefaultColorOnEventDirective } from './directives/color.directive';
import { NewemployeeComponent } from './newemployee/newemployee.component';

import { ApiService } from './services/api.service';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent,
    DefaultColorOnEventDirective,
    // NewemployeeComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
