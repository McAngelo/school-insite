import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';

import {
    AllParentsComponent,
    AddParentComponent,
    EditParentComponent,
    ParentDetailsComponent,
    ParentListComponent
} from './';


@NgModule({
    declarations: [
        AllParentsComponent,
        AddParentComponent,
        EditParentComponent,
        ParentDetailsComponent,
        ParentListComponent
    ],
  imports: [
    CommonModule,
    ParentsRoutingModule
  ]
})
export class ParentsModule { }
