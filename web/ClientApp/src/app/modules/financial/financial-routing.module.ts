import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
    {
        path: 'finance',
        children: [
            { path: '', redirectTo: 'school-fees', pathMatch: 'prefix' },
            {
                path: 'school-fees',
                component: SchoolFeesComponent
            },
            {
                path: 'pay',
                component: PayComponent
            },
            {
                path: 'payments',
                component: PaymentsComponent
            },
            {
                path: 'payroll',
                component: EmployeeSalaryComponent
            },
            {
                path: 'pay-slip',
                component: PayslipComponent
            },
            {
                path: 'expenses',
                component: ExpensesComponent
            },
            {
                path: 'invoices',
                component: InvoicesComponent
            },
            {
                path: 'taxes',
                component: TaxesComponent
            },
            {
                path: 'provident-fund',
                component: ProvidentFundComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
