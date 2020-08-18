import { Component, OnInit, createPlatform } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveFormModel: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {

    this.createForm();

    // this.reactiveFormModel = new FormGroup(
    //   {
    //     fullname: new FormControl(''),
    //     email: new FormControl(''),
    //     address: new FormControl(''),
    //     city: new FormControl(''),
    //     phone: new FormControl(''),
    //     passwordsGroup: new FormGroup(
    //       {          
    //         password: new FormControl(''),
    //         confirmPassword: new FormControl('')
    //       }
    //     )
    //   }
    // )

    

   }

  ngOnInit(): void {
  }

  createForm(){

    this.reactiveFormModel = this.fb.group(
      {
        fullName: [null, Validators.required],
        email: [null, Validators.required],
        address: [null, Validators.required],
        city: [null, Validators.required],
        phone:[null, Validators.required],
        passwordsGroup: this.fb.group({
          password: "",
          confirmPassword: ""
        })
      }
    )

    console.log(this.reactiveFormModel)
  }

  onSubmit(){
    this.formSubmitted = true;
  }

}
