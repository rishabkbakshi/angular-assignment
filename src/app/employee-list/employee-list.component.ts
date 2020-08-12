import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee-list/employee';
import { NumberValueAccessor } from '@angular/forms';
// import { DefaultColorOnEventDirective } from 'src/app/directives/color.directive';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

public hideInfo :boolean = false;
public selectedRowIndex :number;

selectedRow = {
  currentIndex: undefined
}

employeeList = [
  {
      employeeid : 1,
      firstName :'Nishanth',
      lastName : 'Singamsetty',
      dept : 'ILP Training',
      city : 'Chicago',
      email : 'nishanth.singamsetyy@tcs.com'
    },
    {
      employeeid : 2,
      firstName :'Varsha',
      lastName : 'Jayaraman',
      dept : 'ILP Training',
      city : 'Chicago',
      email : 'varsha@tcs.com'
    },
    {
      employeeid : 3,
      firstName :'Rishab',
      lastName : 'Bakshi',
      dept : 'ILP Training',
      city : 'Chicago',
      email : 'rishab@tcs.com'
    }
]
  ngOnInit(): void {
  }

  editRow(index){
    if(this.selectedRow.currentIndex != undefined){
      return (this.selectedRow.currentIndex == index) ? true: false;
    }
    else return false;  
  }

  getInfo(inputBox, index, detail){
    console.log("input", index, inputBox, inputBox.value)
    this.employeeList[index][detail] = inputBox.value
  }

  EditEmp(index) {
    // this.hideInfo=!this.hideInfo;e
    console.log("setting index as ", index)
    this.selectedRow.currentIndex = index;   
  }

  UpdateEmp(index) {
    console.log(this.selectedRow.currentIndex,index)
    this.selectedRow.currentIndex = undefined
    // this.hideInfo=!this.hideInfo;
  }

}
