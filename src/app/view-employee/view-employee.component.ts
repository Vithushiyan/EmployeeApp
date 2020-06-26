import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../class/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {}; 

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }
}
