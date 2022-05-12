import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    LoginComponent,
    RegisterComponent,
    ValidateAccountComponent,
    ForgottenPasswordComponent,
    ChangePasswordClientComponent
} from './';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'validate-account',
                component: ValidateAccountComponent
            },
            {
                path: 'forgotten-password',
                component: ForgottenPasswordComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordClientComponent
            }
        ]
    },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
