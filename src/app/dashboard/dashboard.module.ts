import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { DashboardService } from './dashboard.service';
import { ErrorTitleInfoComponent } from './error-title-info/error-title-info.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SelectInfoComponent } from './error-title-info/select-info/select-info.component';
import { WordCloudTitleComponent } from './error-title-info/word-cloud-title/word-cloud-title.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
@NgModule({
  declarations: [
    DashboardComponent,
    StudentTableComponent,
    ErrorTitleInfoComponent,
    SelectInfoComponent,
    WordCloudTitleComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
    TagCloudModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
