import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
    ExpenseReportComponent,
    InvoiceReportComponent
} from './';

const routes: Routes = [
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
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
