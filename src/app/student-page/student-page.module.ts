import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPageRoutingModule } from './student-page-routing.module';
import { StudentPageComponent } from './student-page.component';
import { SharedModule } from '../shared/shared.module';
import { DetalisComponent } from './detalis/detalis.component';
import { RecordComponent } from './record/record.component';
import { StudentPageService } from './student-page.service';

@NgModule({
  declarations: [StudentPageComponent, DetalisComponent, RecordComponent],
  imports: [CommonModule, StudentPageRoutingModule, SharedModule],
  providers: [StudentPageService],
})
export class StudentPageModule {}
