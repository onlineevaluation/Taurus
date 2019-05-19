import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ErrorTitleInfoComponent } from './error-title-info/error-title-info.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: ':classId',
    component: DashboardComponent,
    data: {
      breadcrumb: '班级',
    },
  },
  {
    path: 'class/:classId/:pageId',
    component: ErrorTitleInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
