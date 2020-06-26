import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../class/rest-api.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  Employee: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  } 
}
