import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-management',
  templateUrl: './page-management.component.html',
  styleUrls: ['./page-management.component.less'],
})
export class PageManagementComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  current = 0;

  index = '0';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = '0';
        break;
      }
      case 1: {
        this.index = '1';
        break;
      }
      case 2: {
        this.index = '2';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
