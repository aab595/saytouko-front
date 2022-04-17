import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeManagementRoutingModule } from './time-management-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
]);

import { TimetableComponent } from './timetable/timetable.component';
import { TextbookComponent } from './textbook/textbook.component';
import { PresenceComponent } from './presence/presence.component';
import { VacationComponent } from './vacation/vacation.component';

@NgModule({
  declarations: [
    TimetableComponent,
    TextbookComponent,
    PresenceComponent,
    VacationComponent,
  ],
  imports: [
    CommonModule,
    TimeManagementRoutingModule,
    FullCalendarModule,
    FontAwesomeModule,
  ],
  exports: [
    TimetableComponent,
    TextbookComponent,
    PresenceComponent,
    VacationComponent,
  ],
})
export class TimeManagementModule {}
