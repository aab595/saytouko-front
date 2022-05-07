import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { icon: faSeedling, title: 'Tableau de bord' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
