import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPageRoutingModule } from './student-page-routing.module';
import { StudentPageComponent } from './student-page.component';

@NgModule({
  declarations: [StudentPageComponent],
  imports: [
    CommonModule,
    StudentPageRoutingModule
  ]
})
export class StudentPageModule { }
