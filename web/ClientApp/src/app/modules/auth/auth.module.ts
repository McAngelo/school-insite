import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import {
    LoginComponent,
    RegisterComponent,
    ValidateAccountComponent,
    ForgottenPasswordComponent,
    ChangePasswordClientComponent
} from './';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ValidateAccountComponent,
        ForgottenPasswordComponent,
        ChangePasswordClientComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
