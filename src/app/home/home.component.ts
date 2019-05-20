import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassInfo } from '../entity/ClassInfo';
import { TeacherInfo } from '../entity/TeacherInfo';
import { HomeService } from './home.service';
import { Result } from '../entity/Result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  username: string = 'Nan';
  color: string = '#ffbf00';
  avatarText: string = 'Nan';
  classList: Array<ClassInfo> = [];
  gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  classmemberCount: number = 0;
  userId: number;
  systemNoticeList: Array<string> = [];
  constructor(private router: Router, private homeService: HomeService) {}
  ngOnInit() {
    // 获取登录用户信息
    const profileJson = localStorage.getItem('profile');
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.username = teacherInfo.name;
    this.userId = teacherInfo.userId;
    this.avatarText = this.username.substring(0, 1).toLowerCase();
    this.getClassInfo(teacherInfo.identity);
    this.getStudentCount(teacherInfo.identity);
    this.getNotice();
  }

  ngAfterViewInit(): void {}

  toDashBoard(classId: number) {
    this.router.navigate(['/dashboard', classId]);
  }

  getClassInfo(teacherId: number) {
    this.homeService.getClassInfo(teacherId).subscribe((result: Result) => {
      this.classList = result.data;
    });
  }

  getStudentCount(teahcerId: number) {
    this.homeService
      .getTeacherAllStudentCount(teahcerId)
      .subscribe((result: Result) => {
        this.classmemberCount = result.data;
      });
  }

  getNotice() {
    this.homeService.getNotice(this.userId).subscribe((result: Result) => {
      result.data.forEach(element => {
        this.systemNoticeList.push(
          `${element.createTime.substring(0, 10)} - ${element.message}`,
        );
      });
    });
  }
}
