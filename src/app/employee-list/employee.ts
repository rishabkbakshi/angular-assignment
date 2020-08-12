export class Employee {
    
    employeeid: number;
    firstName: string;
    lastName: string;
    dept: string;
    city: string;
    email: string;
    
  
    constructor(employeeid, firstName, lastName, dept, city, email) {
      this.employeeid=employeeid
      this.firstName=firstName
      this.lastName=lastName
      this.dept=dept
      this.city=city
      this.email=email
    }
}