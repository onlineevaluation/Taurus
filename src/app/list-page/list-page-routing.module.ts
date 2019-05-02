import { ListPageComponent } from './list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPageComponent } from './show-page/show-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  {
    path: 'show/:pageId',
    component: ShowPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
