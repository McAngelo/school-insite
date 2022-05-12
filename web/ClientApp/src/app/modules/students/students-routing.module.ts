import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AllStudentsComponent,
    AddStudentsComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    StudentListComponent
} from './';

const routes: Routes = [
    {
    path: 'students',
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'prefix' },
            {
                path: 'all',
                component: AllStudentsComponent
            },
            {
                path: 'list',
                component: StudentListComponent
            },
            {
                path: 'add',
                component: AddStudentsComponent
            },
            {
                path: 'edit',
                component: EditStudentComponent
            },
            {
                path: 'details',
                component: StudentDetailsComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
