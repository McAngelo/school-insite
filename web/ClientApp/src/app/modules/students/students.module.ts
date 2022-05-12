import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';

import {
    AllStudentsComponent,
    AddStudentsComponent,
    EditStudentComponent,
    StudentDetailsComponent
} from './';
import { StudentListComponent } from './components/student-list/student-list.component';

@NgModule({
    declarations: [
        AllStudentsComponent,
        AddStudentsComponent,
        EditStudentComponent,
        StudentDetailsComponent,
        StudentListComponent
    ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
