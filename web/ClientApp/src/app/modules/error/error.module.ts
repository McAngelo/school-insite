import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';

import {
    InteralServerErrorComponent,
    NotFoundErrorComponent,
    AccessDeniedErrorComponent
} from './';

@NgModule({
    declarations: [
        InteralServerErrorComponent,
        NotFoundErrorComponent,
        AccessDeniedErrorComponent
    ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
