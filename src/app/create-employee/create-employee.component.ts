import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../class/rest-api.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() employeeDetails = { name: '', salary: '', age: '' }

  constructor( 
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-employee'])
    })
  }
}
