import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    {
        path: 'settings',
        children: [
            { path: '', redirectTo: 'school-info', pathMatch: 'prefix' },
            {
                path: 'school-info',
                component: SchoolSettingsComponent
            },
            {
                path: 'localization',
                component: LocalizationComponent
            },
            {
                path: 'theme',
                component: ThemeSettingsComponent
            },
            {
                path: 'roles-permissions',
                component: RolesPermissionsComponent
            },
            {
                path: 'email',
                component: EmailSettingsComponent
            },
            {
                path: 'invoice',
                component: InvoiceSettingsComponent
            },
            {
                path: 'salary',
                component: SalarySettingsComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'leave-type',
                component: LeaveTypeComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
