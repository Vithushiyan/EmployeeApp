import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
