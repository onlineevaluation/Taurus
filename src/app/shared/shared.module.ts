import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from '../http-interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class SharedModule {}
