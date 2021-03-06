import { PageClassParam } from '../../entity/Params';
import { Result } from 'src/app/entity/Result';
import { ListPageService } from '../list-page.service';
import { Component, OnInit } from '@angular/core';
import { PaperInfo, TitleInfo } from 'src/app/entity/Info';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeacherInfo } from 'src/app/entity/TeacherInfo';
import { log } from 'util';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.less'],
})
export class ShowPageComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  classListOption: Array<{ label: string; value: number }> = [];
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = [];
  pageId: number;
  startTime: number;
  endTime: number;
  selectList: Array<TitleInfo> = [];
  blankList: Array<TitleInfo> = [];
  answerList: Array<TitleInfo> = [];
  codeList: Array<TitleInfo> = [];
  algorithmList: Array<TitleInfo> = [];
  paperTitleInfo: PaperInfo = new PaperInfo();
  listOfMin: Array<{ label: string; value: string }> = [];
  listOfMinOptions: number = 0;
  selectHours: number = 0;
  constructor(
    private listpageService: ListPageService,
    private routeInfo: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.pageId = params['pageId'];
    });
    console.log('pageId', this.pageId);
    this.listpageService
      .getPageDetail(this.pageId)
      .subscribe((result: Result) => {
        this.paperTitleInfo = result.data;
        this.setPaperTitleInfoParam(this.paperTitleInfo);
      });

    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }

    const minChildren: Array<{ label: string; value: string }> = [];
    for (let i = 0; i < 60; i++) {
      minChildren.push({
        label: i < 10 ? '0' + i + '分钟' : i + '分钟',
        value: i.toString(),
      });
    }

    this.listOfOption = children;
    this.listOfMin = minChildren;
  }

  setPaperTitleInfoParam(paperTitleParam: PaperInfo) {
    paperTitleParam.titles.forEach(title => {
      if (title.category == '1') {
        this.selectList.push(title);
      }
      if (title.category == '2') {
        this.blankList.push(title);
      }
      if (title.category == '3') {
        this.answerList.push(title);
      }
      if (title.category == '4') {
        this.codeList.push(title);
      }
      if (title.category == '5') {
        this.algorithmList.push(title);
      }
    });
  }

  teacherId: number;
  showModal(): void {
    this.listOfSelectedValue = [];
    this.classListOption = [];
    this.isVisible = true;
    const profileJson = localStorage.getItem('profile');
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.teacherId = teacherInfo.identity;
    this.listpageService
      .getClassByTeacherId(this.teacherId)
      .subscribe((result: Result) => {
        console.log('result ', result);
        result.data.forEach(element => {
          this.classListOption.push({
            label: element.num,
            value: element.id,
          });
        });
      });
    console.log('class info ', this.classListOption);
  }

  handleOk(): void {
    this.isOkLoading = true;
    var pageClassParam = new PageClassParam();
    pageClassParam.classIds = this.listOfSelectedValue;
    pageClassParam.endTime = this.endTime;
    pageClassParam.startTime = this.startTime;
    pageClassParam.teacherId = this.teacherId;
    pageClassParam.pageId = this.pageId;
    var min = this.listOfMinOptions;
    var hours = this.selectHours;
    var needTime = hours * 3600000 + min * 60000;
    console.log('need time ', needTime);
    pageClassParam.needTime = needTime;
    this.listpageService.postPaperClassPlan(pageClassParam).subscribe(
      (result: Result) => {
        console.log('data', result.data);
        if (result.code === 200) {
          this.isVisible = false;
          this.isOkLoading = false;
        }
      },
      error => {
        this.isOkLoading = false;
      },
    );
  }

  handleCancel(): void {
    this.isOkLoading = false;
    this.isVisible = false;
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  getNeedTime(value: Event) {
    log(value + '');
  }

  onOk(result: Date[]): void {
    console.log('onOk', result);
    this.startTime = result[0].getTime();
    this.endTime = result[1].getTime();
  }
}
