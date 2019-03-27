import { Component, OnInit } from '@angular/core';
import { ClassInfo } from '../entity/ClassInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  username: string;
  color: string = '#ffbf00';
  avatarText: string;
  classList: Array<ClassInfo> = [];
  gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  constructor(private router: Router) {}

  ngOnInit() {
    var c1 = new ClassInfo();
    c1.classId = 1;
    c1.classNumber = 'Y01';
    c1.members = 48;
    var c2 = new ClassInfo();
    c2.classId = 2;
    c2.classNumber = 'Y02';
    c2.members = 44;
    this.classList.push(c1);
    this.classList.push(c2);
    this.username = '杨晓辉';
    this.avatarText = this.username.substring(0, 1);
  }

  toDashBoard(classId: number) {
    this.router.navigate(['/dashboard', classId]);
  }
}
