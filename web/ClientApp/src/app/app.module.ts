import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTeachersComponent } from './teachers/all-teachers/all-teachers.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AllParentsComponent } from './parents/all-parents/all-parents.component';
import { AddParentComponent } from './parents/add-parent/add-parent.component';
import { EditParentComponent } from './parents/edit-parent/edit-parent.component';
import { ParentDetailsComponent } from './parents/parent-details/parent-details.component';
import { SchoolCalendarComponent } from './school-calendar/school-calendar.component';
import { EmailInboxComponent } from './email/email-inbox/email-inbox.component';
import { ComposeEmailComponent } from './email/compose-email/compose-email.component';
import { EmailViewComponent } from './email/email-view/email-view.component';
import { ExamsTimetableComponent } from './exams-timetable/exams-timetable.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EmployeesComponent } from './management/employees/employees.component';
import { LeaveRequestsComponent } from './management/leave-requests/leave-requests.component';
import { AttendanceComponent } from './management/attendance/attendance.component';
import { DepartmentsComponent } from './management/departments/departments.component';
import { DesignationsComponent } from './management/designations/designations.component';
import { ActivitiesComponent } from './management/activities/activities.component';
import { UsersComponent } from './management/users/users.component';
import { InvoicesComponent } from './accounts/invoices/invoices.component';
import { PaymentsComponent } from './accounts/payments/payments.component';
import { ExpensesComponent } from './accounts/expenses/expenses.component';
import { ProvidentFundComponent } from './accounts/provident-fund/provident-fund.component';
import { TaxesComponent } from './accounts/taxes/taxes.component';
import { EmployeeSalaryComponent } from './payroll/employee-salary/employee-salary.component';
import { PayslipComponent } from './payroll/payslip/payslip.component';
import { ExpenseReportComponent } from './reports/expense-report/expense-report.component';
import { InvoiceReportComponent } from './reports/invoice-report/invoice-report.component';
import { SchoolSettingsComponent } from './settings/school-settings/school-settings.component';
import { LocalizationComponent } from './settings/localization/localization.component';
import { ThemeSettingsComponent } from './settings/theme-settings/theme-settings.component';
import { RolesPermissionsComponent } from './settings/roles-permissions/roles-permissions.component';
import { EmailSettingsComponent } from './settings/email-settings/email-settings.component';
import { InvoiceSettingsComponent } from './settings/invoice-settings/invoice-settings.component';
import { SalarySettingsComponent } from './settings/salary-settings/salary-settings.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { LeaveTypeComponent } from './settings/leave-type/leave-type.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgottenPasswordComponent } from './auth/forgotten-password/forgotten-password.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';
import { ChangePasswordClientComponent } from './auth/change-password-client/change-password-client.component'






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SideBarComponent,
    DashboardComponent,
    AllTeachersComponent,
    TeacherDetailsComponent,
    EditTeacherComponent,
    AddTeacherComponent,
    AllStudentsComponent,
    AddStudentsComponent,
    EditStudentComponent,
    StudentDetailsComponent,
    AllParentsComponent ,
    AddParentComponent ,
    EditParentComponent,
    ParentDetailsComponent,
    SchoolCalendarComponent,
    EmailInboxComponent,
    ComposeEmailComponent ,
    EmailViewComponent,
    ExamsTimetableComponent,
    HolidaysComponent,
    EmployeesComponent,
    LeaveRequestsComponent ,
    AttendanceComponent,
    ActivitiesComponent,
    DesignationsComponent,
    DepartmentsComponent,
    UsersComponent,
    InvoicesComponent,
    PaymentsComponent,
    ExpensesComponent,
    ProvidentFundComponent,
    TaxesComponent,
    EmployeeSalaryComponent,
    PayslipComponent,
    ExpenseReportComponent,
    InvoiceReportComponent,
    SchoolSettingsComponent,
    LocalizationComponent,
    ThemeSettingsComponent,
    RolesPermissionsComponent,
    EmailSettingsComponent,
    InvoiceSettingsComponent,
    SalarySettingsComponent,
    NotificationsComponent ,
    ChangePasswordComponent,
    LeaveTypeComponent,
    TeacherListComponent,
    LoginComponent,
    RegisterComponent,
    ForgottenPasswordComponent,
    ValidateAccountComponent,
    ChangePasswordClientComponent






  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
