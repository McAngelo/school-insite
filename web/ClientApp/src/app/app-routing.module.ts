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
          ,
          { path: 'school-calendar', component: SchoolCalendarComponent },
          { path: 'exams-timetable', component: ExamsTimetableComponent },
          { path: 'holidays', component: HolidaysComponent },
          { path: 'counter', component: CounterComponent },
          { path: 'fetch-data', component: FetchDataComponent },
          { path: '**', redirectTo: 'dashboard' },
      ])
*/


const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: '',
        component: ErrorLayoutComponent,
        loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
    },
    
    { path: '**', redirectTo: 'auth' },

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