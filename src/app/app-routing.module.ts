import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoginGuard } from './provider/CanLoginGuard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [CanLoginGuard],
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanLoginGuard],
})
export class AppRoutingModule {}
