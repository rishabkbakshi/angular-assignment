import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public showDetails: boolean = false;
  public formSubmitted: boolean = false;
  public model:any = {};

  onSubmit(form){
    this.formSubmitted = true

    if(form.form.status !== "VALID"){
      return;
    }
    
    this.showDetails = true
  }

  ngOnInit(): void {

  }

}
