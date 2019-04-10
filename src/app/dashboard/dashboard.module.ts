import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { DashboardService } from './dashboard.service';
@NgModule({
  declarations: [DashboardComponent, StudentTableComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: [DashboardService],
})
export class DashboardModule {}
