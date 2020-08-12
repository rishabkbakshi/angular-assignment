export class Employee {
    
    employeeid: number;
    firstName: string;
    lastName: string;
    dept: string;
    city: string;
    email: string;
    dob: any;
    salary: number;
    
  
    constructor(employeeid, firstName, lastName, dept, city, email, dob, salary) {
      this.employeeid=employeeid
      this.firstName=firstName
      this.lastName=lastName
      this.dept=dept
      this.city=city
      this.email=email
      this.dob=dob
      this.salary=salary
    }
}