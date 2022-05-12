import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    InteralServerErrorComponent,
    NotFoundErrorComponent,
    AccessDeniedErrorComponent
} from './';

const routes: Routes = [
    {
        path: 'error',
        children: [
            { path: '', redirectTo: 'not-found', pathMatch: 'prefix' },
            {
                path: 'not-found',
                component: NotFoundErrorComponent
            },
            {
                path: 'access-denied',
                component: AccessDeniedErrorComponent
            },
            {
                path: 'internal-server',
                component: InteralServerErrorComponent
            }
        ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
