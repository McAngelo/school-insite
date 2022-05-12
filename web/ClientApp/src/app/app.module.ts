import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './main/app.component';
import {
    NavMenuComponent,
    SideBarComponent,
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    PortalLayoutComponent
} from './layout';



/*import { HomeComponent } from './home/home.component';



import { SchoolCalendarComponent } from './school-calendar/school-calendar.component';
import { EmailInboxComponent } from './email/email-inbox/email-inbox.component';
import { ComposeEmailComponent } from './email/compose-email/compose-email.component';
import { EmailViewComponent } from './email/email-view/email-view.component';

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

*/








@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideBarComponent,
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    PortalLayoutComponent

    /*HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
    ChangePasswordClientComponent,
    ,*/








  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
