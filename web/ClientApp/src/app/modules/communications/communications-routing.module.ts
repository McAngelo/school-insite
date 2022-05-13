import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    EmailInboxComponent,
    EmailViewComponent,
    ComposeEmailComponent,
    ChatComponent
} from './';

const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    {
    path: 'email',
    children: [
        { path: '', redirectTo: 'inbox', pathMatch: 'prefix' },
        {
            path: 'inbox',
            component: EmailInboxComponent
        },
        {
            path: 'compose',
            component: ComposeEmailComponent
        },
        {
            path: 'view',
            component: EmailViewComponent
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsRoutingModule { }
