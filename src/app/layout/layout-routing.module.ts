import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: '主页',
    },
    children: [
      {
        path: '',
        loadChildren: '../home/home.module#HomeModule',
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule',
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
