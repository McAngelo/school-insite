import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';

import {
    AllTeachersComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    TeacherDetailsComponent,
    TeachersListComponent
} from './';


@NgModule({
    declarations: [
        AllTeachersComponent,
        AddTeacherComponent,
        EditTeacherComponent,
        TeacherDetailsComponent,
        TeachersListComponent
    ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
