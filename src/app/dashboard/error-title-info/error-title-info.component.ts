import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Result } from 'src/app/entity/Result';
import { ClassScoreInfo, TitleErrorInfo } from 'src/app/entity/Info';

@Component({
  selector: 'app-error-title-info',
  templateUrl: './error-title-info.component.html',
  styleUrls: ['./error-title-info.component.less'],
})
export class ErrorTitleInfoComponent implements OnInit {
  private classId = 0;
  private pageId = 0;
  loading = true;
  classScoreInfo = new ClassScoreInfo();
  titleErrorInfo = new TitleErrorInfo();

  constructor(
    private routeInfo: ActivatedRoute,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.classId = params.classId;
      this.pageId = params.pageId;
    });
    this.getClassError();
    this.getPageError();
  }

  getClassError() {
    this.dashboardService
      .getClassErrorInPage(this.classId, this.pageId)
      .subscribe((result: Result) => {
        this.classScoreInfo = result.data;
      });
  }

  getPageError() {
    this.dashboardService
      .getErrorInfo(this.classId, this.pageId)
      .subscribe((result: Result) => {
        this.titleErrorInfo = result.data;
        console.log('title error ', this.titleErrorInfo.choiceErrorList);
        this.loading = false;
      });
  }
}
