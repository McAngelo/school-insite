import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AllParentsComponent,
    AddParentComponent,
    EditParentComponent,
    ParentDetailsComponent,
    ParentListComponent
} from './';

const routes: Routes = [
    {
        path: 'parents',
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'prefix' },
            {
                path: 'all',
                component: AllParentsComponent
            },
            {
                path: 'list',
                component: ParentListComponent
            },
            {
                path: 'add',
                component: AddParentComponent
            },
            {
                path: 'edit',
                component: EditParentComponent
            },
            {
                path: 'details',
                component: ParentDetailsComponent
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
