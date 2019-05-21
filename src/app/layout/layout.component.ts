import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherInfo } from '../entity/TeacherInfo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  text = '';
  constructor(private router: Router) {}

  ngOnInit() {
    const profileJson = localStorage.getItem('profile');
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.text = teacherInfo.name;
  }

  toRouter(routerString: string) {
    this.router.navigateByUrl(routerString);
  }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
