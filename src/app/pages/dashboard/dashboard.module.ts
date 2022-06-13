import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NzBreadCrumbModule,
    NgChartsModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
