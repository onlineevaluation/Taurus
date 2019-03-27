import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroAntdModule, RouterModule],
  exports: [CommonModule, NgZorroAntdModule, RouterModule],
})
export class SharedModule {}
