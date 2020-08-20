import { Component, OnInit, createPlatform } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;
  formSubmitted: boolean = false;
  showDetails: boolean = false;

  constructor(private fb: FormBuilder) {

    this.createForm();

   }

  ngOnInit(): void {
  }

  createForm(){

    this.reactiveForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        phone:['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
        },{
          validator: ConfirmPasswordValidator.ConfirmPassword
        });
    }

  get f() { return this.reactiveForm.controls; }

  onSubmit(){
    this.formSubmitted = true;
    // stop here if form is invalid
    if (this.reactiveForm.invalid) {
      this.showDetails = false
      return;
    }
  
    this.showDetails = true;
  }
}
