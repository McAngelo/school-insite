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
