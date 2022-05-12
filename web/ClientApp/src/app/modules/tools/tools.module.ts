import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import {
    NotificationsComponent,
    ExamsTimetableComponent,
    FetchDataComponent,
    CounterComponent,
    HolidaysComponent,
    SchoolCalendarComponent
} from './';


@NgModule({
    declarations: [
        NotificationsComponent,
        ExamsTimetableComponent,
        FetchDataComponent,
        CounterComponent,
        HolidaysComponent,
        SchoolCalendarComponent
    ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
