import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceComponent } from './presence/presence.component';
import { TextbookComponent } from './textbook/textbook.component';
import { TimetableComponent } from './timetable/timetable.component';
import { VacationComponent } from './vacation/vacation.component';

const routes: Routes = [
  { path: 'timetable', component: TimetableComponent },
  { path: 'textbook', component: TextbookComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'vacation', component: VacationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeManagementRoutingModule {}
