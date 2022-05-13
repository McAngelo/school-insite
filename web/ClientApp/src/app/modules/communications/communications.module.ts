import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';

import {
    EmailInboxComponent,
    EmailViewComponent,
    ComposeEmailComponent
} from './';


@NgModule({
    declarations: [
        EmailInboxComponent,
        EmailViewComponent,
        ComposeEmailComponent    ],
  imports: [
    CommonModule,
    CommunicationsRoutingModule
  ]
})
export class CommunicationsModule { }
