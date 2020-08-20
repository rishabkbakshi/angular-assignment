import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';  
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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent,
    DefaultColorOnEventDirective,
    // NewemployeeComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailsComponent,
    ErrorComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
