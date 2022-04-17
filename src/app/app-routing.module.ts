import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'school-management',
    loadChildren: () =>
      import('./pages/school-management/school-management.module').then(
        (m) => m.SchoolManagementModule
      ),
  },
  {
    path: 'time-management',
    loadChildren: () =>
      import('./pages/time-management/time-management.module').then(
        (m) => m.TimeManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
