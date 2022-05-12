import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AllTeachersComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    TeacherDetailsComponent,
    TeachersListComponent
} from './';

const routes: Routes = [
    {
        path: 'teachers',
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'prefix' },
            {
                path: 'all',
                component: AllTeachersComponent
            },
            {
                path: 'list',
                component: TeachersListComponent
            },
            {
                path: 'add',
                component: AddTeacherComponent
            },
            {
                path: 'edit',
                component: EditTeacherComponent
            },
            {
                path: 'details',
                component: TeacherDetailsComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
