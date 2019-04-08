import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  constructor(private router: Router) {}

  ngOnInit() {}

  toRouter(routerString: string) {
    switch (routerString) {
      case 'home':
        this.router.navigateByUrl('home');
        break;
      case 'page-management':
        console.log('ssssssss');
        this.router.navigateByUrl('page-management');
        break;
    }
  }
}
