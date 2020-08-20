import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public formSubmitted: boolean = false;
  public model:any = {};

  onSubmit(){
    this.formSubmitted = true
    console.log(this.formSubmitted)
  }

  ngOnInit(): void {

  }

}
