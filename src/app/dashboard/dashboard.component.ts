import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import G2 from '@antv/g2/build/g2';
import { DashboardService } from './dashboard.service';
import { Result } from '../entity/Result';
import { map } from 'rxjs/operators';
import { TeacherInfo } from '../entity/TeacherInfo';
import { ExamInfo, StudentAndScoreInfo } from '../entity/Info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  title = 'app';
  teacherInfo: TeacherInfo;
  data = [];
  chart;
  graph;
  passedRate: number;
  top10List: Array<StudentAndScoreInfo> = [];
  studentScoreTableList: Array<StudentAndScoreInfo> = [];

  constructor(
    private routeInfo: ActivatedRoute,
    private dashboardService: DashboardService,
  ) {}

  classId: number;
  selected: string;
  menuitems: Array<ExamInfo> = [];

  /**
   * 柱状图渲染
   */
  renderBarChart() {
    this.chart.source(this.data);
    this.chart.interval().position('分数范围*人数');
    //  渲染图表
    this.chart.render();
  }

  ngOnInit() {
    this.chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width: 700, // 指定图表宽度
      height: 400, // 指定图表高度
    });

    const profileJson = localStorage.getItem('profile');
    this.teacherInfo = JSON.parse(profileJson);
    this.routeInfo.params.subscribe((params: Params) => {
      this.classId = params['classId'];
    });
    this.dashboardService
      .getClassAllExamPage(this.classId)
      .pipe(
        map((result: Result) => {
          result.data.forEach((element: ExamInfo) => {
            let examInfo = new ExamInfo();
            examInfo = element;
            this.menuitems.push(examInfo);
          });
          console.log(this.menuitems);
          this.selected = this.menuitems[0].title;
          // 发起获取其他的请求
          this.getPageInfo(
            this.menuitems[0].pagesId,
            this.menuitems[0].classId,
            this.teacherInfo.identity,
          );
          this.getScoreAnalytics(
            this.menuitems[0].classId,
            this.menuitems[0].pagesId,
          );
          this.getPassedData(
            this.menuitems[0].classId,
            this.menuitems[0].pagesId,
          );
          this.getClassmateScore(
            this.menuitems[0].classId,
            this.menuitems[0].pagesId,
          );
        }),
      )
      .subscribe();
  }

  selectChange(item: ExamInfo) {
    this.selected = item.title;
    this.getPageInfo(item.pagesId, item.classId, this.teacherInfo.identity);
    this.getScoreAnalytics(item.classId, item.pagesId);
    this.getPassedData(item.classId, item.pagesId);
    this.getClassmateScore(item.classId, item.pagesId);
  }

  private getPageInfo(pageId: number, classId: number, teacherId: number) {
    this.dashboardService.getTop10Student(pageId, classId, teacherId).subscribe(
      (result: Result) => {
        console.log('top list ', result.data);
        this.top10List = result.data;
      },
      error => {
        console.log('error ', error);
      },
    );
  }

  private getScoreAnalytics(classId: number, pageId: number) {
    this.data = [];
    this.dashboardService
      .getScoreAnalytics(classId, pageId)
      .pipe(
        map((result: Result) => {
          const item = result.data;
          if (item['50'] != null || item['50'] !== undefined) {
            this.data.push({ 人数: item['50'].length, 分数范围: '<60' });
          }
          if (item['60'] != null || item['60'] !== undefined) {
            this.data.push({ 人数: item['60'].length, 分数范围: '60~70' });
          }
          if (item['70'] != null || item['70'] !== undefined) {
            this.data.push({ 人数: item['70'].length, 分数范围: '70~80' });
          }
          if (item['80'] != null || item['80'] !== undefined) {
            this.data.push({ 人数: item['80'].length, 分数范围: '80~90' });
          }
          if (item['90'] != null || item['90'] !== undefined) {
            this.data.push({ 人数: item['90'].length, 分数范围: `90~99` });
          }
          if (item['100'] != null || item['100'] !== undefined) {
            this.data.push({ 人数: item['100'].length, 分数范围: '100' });
          }
          this.renderBarChart();
        }),
      )
      .subscribe();
  }

  private getPassedData(classId: number, pageId: number) {
    this.dashboardService
      .getPassed(pageId, classId)
      .subscribe((result: Result) => {
        console.log('passed rate', result);
        this.passedRate = result.data * 10;
      });
  }

  private getClassmateScore(classId: number, pageId: number) {
    this.dashboardService
      .getClassStudents(classId, pageId)
      .subscribe((result: Result) => {
        console.log('student class mate', result);
        this.studentScoreTableList = result.data;
      });
  }
}
