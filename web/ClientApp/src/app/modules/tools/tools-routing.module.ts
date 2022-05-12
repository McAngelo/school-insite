import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    NotificationsComponent,
    ExamsTimetableComponent,
    FetchDataComponent,
    CounterComponent,
    HolidaysComponent,
    SchoolCalendarComponent
} from './';

const routes: Routes = [
    { path: 'school-calendar', component: SchoolCalendarComponent },
    { path: 'exams-timetable', component: ExamsTimetableComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'fetch-data', component: FetchDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
