import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

import {
    SchoolSettingsComponent,
    LocalizationComponent,
    ThemeSettingsComponent,
    RolesPermissionsComponent,
    EmailSettingsComponent,
    InvoiceSettingsComponent,
    SalarySettingsComponent,
    NotificationsComponent,
    ChangePasswordComponent,
    LeaveTypeComponent
} from './';
//import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';

@NgModule({
    declarations: [
        SchoolSettingsComponent,
        LocalizationComponent,
        ThemeSettingsComponent,
        RolesPermissionsComponent,
        EmailSettingsComponent,
        InvoiceSettingsComponent,
        SalarySettingsComponent,
        NotificationsComponent,
        ChangePasswordComponent,
        LeaveTypeComponent
    ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
