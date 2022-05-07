import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceComponent } from './presence/presence.component';
import { TextbookComponent } from './textbook/textbook.component';
import { TimetableComponent } from './timetable/timetable.component';
import { VacationComponent } from './vacation/vacation.component';

const routes: Routes = [
  { path: 'timetable', component: TimetableComponent, data: { title: 'Emploi du temps' } },
  { path: 'textbook', component: TextbookComponent, data: { title: 'Cahier de texte' } },
  { path: 'presence', component: PresenceComponent, data: { title: 'Liste de présence' } },
  { path: 'vacation', component: VacationComponent, data: { title: 'Congès' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeManagementRoutingModule {}
