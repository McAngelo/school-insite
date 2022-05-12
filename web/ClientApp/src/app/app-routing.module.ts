import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    PortalLayoutComponent
} from './layout';

/*
    RouterModule.forRoot([
          { path: '', component: DashboardComponent, pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
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
                      component: TeacherListComponent
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
          },
          {
              path: 'students',
              children: [
                  { path: '', redirectTo: 'all', pathMatch: 'prefix' },
                  {
                      path: 'all',
                      component: AllStudentsComponent
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
          },
          {
              path: 'parents',
              children: [
                  { path: '', redirectTo: 'all', pathMatch: 'prefix' },
                  {
                      path: 'all',
                      component: AllParentsComponent
                  },
                  {
                      path: 'add',
                      component: AddParentComponent
                  },
                  {
                      path: 'edit',
                      component: EditParentComponent
                  },
                  {
                      path: 'details',
                      component: ParentDetailsComponent
                  },
              ]
          },
          {
              path: 'email',
              children: [
                  { path: '', redirectTo: 'inbox', pathMatch: 'prefix' },
                  {
                      path: 'inbox',
                      component: EmailInboxComponent
                  },
                  {
                      path: 'compose',
                      component: ComposeEmailComponent
                  },
                  {
                      path: 'view',
                      component: EmailViewComponent
                  }
              ]
          },
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
          },
          {
              path: 'accounts',
              children: [
                  { path: '', redirectTo: 'invoices', pathMatch: 'prefix' },
                  {
                      path: 'invoices',
                      component: InvoicesComponent
                  },
                  {
                      path: 'payments',
                      component: PaymentsComponent
                  },
                  {
                      path: 'expenses',
                      component: ExpensesComponent
                  },
                  {
                      path: 'provident-fund',
                      component: ProvidentFundComponent
                  },
                  {
                      path: 'taxes',
                      component: TaxesComponent
                  }
              ]
          },
          {
              path: 'payroll',
              children: [
                  { path: '', redirectTo: 'employee-salary', pathMatch: 'prefix' },
                  {
                      path: 'employee-salary',
                      component: EmployeeSalaryComponent
                  },
                  {
                      path: 'pay-slip',
                      component: PayslipComponent
                  }
              ]
          },
          {
              path: 'reports',
              children: [
                  { path: '', redirectTo: 'expense', pathMatch: 'prefix' },
                  {
                      path: 'expense',
                      component: ExpenseReportComponent
                  },
                  {
                      path: 'invoice',
                      component: InvoiceReportComponent
                  }
              ]
          },
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
          },
          { path: 'school-calendar', component: SchoolCalendarComponent },
          { path: 'exams-timetable', component: ExamsTimetableComponent },
          { path: 'holidays', component: HolidaysComponent },
          { path: 'counter', component: CounterComponent },
          { path: 'fetch-data', component: FetchDataComponent },
          { path: '**', redirectTo: 'dashboard' },
      ])
*/


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
    },
    /*{
        path: '',
        component: LandingPageComponent,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/cases/cases.module').then(m => m.CasesModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/property-information/property-information.module').then(m => m.PropertyInformationModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/system-users/system-users.module').then(m => m.SystemUsersModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/task-manager/task-manager.module').then(m => m.TaskManagerModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PortalComponent,
        loadChildren: () => import('./modules/survey-integration/survey-integration.module').then(m => m.SurveyIntegrationModule),
        canActivate: [AuthGuard]
    },*/
    /* {
        path: '',
        loadChildren: () => import('./modules/error-pages/error-pages.module').then(m => m.ErrorPagesModule)
    }, */
    { path: '**', redirectTo: 'home' },
    //{ path: '**', redirectTo: 'not-found' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }