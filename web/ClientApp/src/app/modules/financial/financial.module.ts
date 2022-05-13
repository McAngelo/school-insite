import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import {
    SchoolFeesComponent,
    PayComponent,
    EmployeeSalaryComponent,
    PayslipComponent,
    PaymentsComponent,
    ExpensesComponent,
    InvoicesComponent,
    TaxesComponent,
    ProvidentFundComponent
} from './';


@NgModule({
    declarations: [
        SchoolFeesComponent,
        PayComponent,
        EmployeeSalaryComponent,
        PayslipComponent,
        PaymentsComponent,
        ExpensesComponent,
        InvoicesComponent,
        TaxesComponent,
        ProvidentFundComponent
    ],
  imports: [
      CommonModule,
      FinancialRoutingModule
  ]
})
export class FinancialModule { }
