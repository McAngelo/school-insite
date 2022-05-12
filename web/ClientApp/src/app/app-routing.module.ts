import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    PortalLayoutComponent
} from './layout';

/*
    RouterModule.forRoot([
          
          
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
        loadChildren: () => import('./modules/parents/parents.module').then(m => m.ParentsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule)
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