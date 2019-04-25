import { PaperTitleEmitterInfo } from 'src/app/entity/EmitterInfo';
import { Title } from 'src/app/entity/Info';
import { PaperTitleParam } from './../entity/Params';
import { Result } from './../entity/Result';
import { PageManagementService } from './page-management.service';
import { Component, OnInit } from '@angular/core';
import { TeacherInfo } from '../entity/TeacherInfo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-management',
  templateUrl: './page-management.component.html',
  styleUrls: ['./page-management.component.less'],
})
export class PageManagementComponent implements OnInit {
  teacherId: number;
  courseId: number;
  typeIds: Array<number> = [];
  chapterIds: Array<number> = [];
  constructor(private pageManagementService: PageManagementService) {}
  titles: Array<Array<Title>> = [];
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

  done(): void {}

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = '0';

        break;
      }
      case 1: {
        this.index = '1';
        // 发送请求
        this.sendPageParam();
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
  ngOnInit() {
    const profileJson = localStorage.getItem('profile');
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.teacherId = teacherInfo.identity;
  }

  getCourseId(courseId: number) {
    this.courseId = courseId;
  }
  getTypeIds(typeIds: Array<number>) {
    this.typeIds = typeIds;
  }

  sendPageParam() {
    const paperTitleParam = new PaperTitleParam();
    paperTitleParam.courseId = this.courseId;
    paperTitleParam.titleType = this.typeIds;
    paperTitleParam.chapterIds = this.chapterIds;
    this.pageManagementService
      .sendPaperTypeIds(paperTitleParam)
      .subscribe((result: Result) => {
        this.titles = result.data;
      });
  }

  getChapterIds(chapterIds: Array<number>) {
    this.chapterIds = chapterIds;
  }

  getPaperTitleInfo(paperTitleInfo: PaperTitleEmitterInfo) {
    console.log('page info', paperTitleInfo);
  }
}
