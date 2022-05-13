import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    EmployeesComponent,
    LeaveRequestsComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationsComponent,
    ActivitiesComponent,
    UsersComponent
} from './';

const routes: Routes = [
    {
        path: 'management',
        children: [
            { path: '', redirectTo: 'all-employees', pathMatch: 'prefix' },
            {
                path: 'all-employees',
                component: EmployeesComponent
            },
            {
                path: 'leave-requests',
                component: LeaveRequestsComponent
            },
            {
                path: 'attendance',
                component: AttendanceComponent
            },
            {
                path: 'departments',
                component: DepartmentsComponent
            },
            {
                path: 'designations',
                component: DesignationsComponent
            },
            {
                path: 'activities',
                component: ActivitiesComponent
            },
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
