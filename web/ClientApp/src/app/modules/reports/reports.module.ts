import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';

import {
    ExpenseReportComponent,
    InvoiceReportComponent
} from './';


@NgModule({
    declarations: [
        ExpenseReportComponent,
        InvoiceReportComponent
    ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
