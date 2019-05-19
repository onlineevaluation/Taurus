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
  private classId: number = 0;
  private pageId: number = 0;
  loading: boolean = true;
  classScoreInfo = new ClassScoreInfo();
  titleErrorInfo = new TitleErrorInfo();

  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  single: any[];
  constructor(
    private routeInfo: ActivatedRoute,
    private dashboardService: DashboardService,
  ) {
    this.single = [
      {
        name: 'Germany',
        value: 8940000,
      },
      {
        name: 'USA',
        value: 5000000,
      },
      {
        name: 'France',
        value: 7200000,
      },
    ];
    // Object.assign(this, { this.single });
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.classId = params['classId'];
      this.pageId = params['pageId'];
    });
    this.getClassError();
    this.getPageError();
  }
  onSelect(event) {
    console.log(event);
  }
  getClassError() {
    this.dashboardService
      .getClassErrorInPage(this.classId, this.pageId)
      .subscribe((result: Result) => {
        console.log('result ', result);
        this.classScoreInfo = result.data;
      });
  }

  getPageError() {
    this.dashboardService
      .getErrorInfo(this.classId, this.pageId)
      .subscribe((result: Result) => {
        // console.log("error ",result.data);
        this.titleErrorInfo = result.data;
        console.log('title error ', this.titleErrorInfo);
        this.loading = false;
      });
  }
}
