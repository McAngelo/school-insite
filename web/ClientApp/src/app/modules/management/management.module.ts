import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';

import {
    EmployeesComponent,
    LeaveRequestsComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationsComponent,
    ActivitiesComponent,
    UsersComponent
} from './';

@NgModule({
    declarations: [
        EmployeesComponent,
        LeaveRequestsComponent,
        AttendanceComponent,
        DepartmentsComponent,
        DesignationsComponent,
        ActivitiesComponent,
        UsersComponent
    ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
