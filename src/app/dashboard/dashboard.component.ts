import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
// import { single } from '../data';
import G2 from '@antv/g2/build/g2';
import { View } from '@antv/data-set';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  title = 'app';

  data = {};
  chart;

  graph;

  listData = [
    {
      studentNumber: '1514010101',
      studentName: '杨晓辉',
      index: 1,
    },

    {
      studentNumber: '1514010102',
      studentName: '杨辉',
      index: 2,
    },

    {
      studentNumber: '1514010103',
      studentName: '杨晓',
      index: 3,
    },

    {
      studentNumber: '1514010104',
      studentName: '晓辉',
      index: 4,
    },
  ];

  constructor(private routeInfo: ActivatedRoute) {
    // Object.assign(this, { single });
  }

  classId: number;
  selected: string;
  menuitems: Array<string> = [];
  chartData() {
    this.data = [
      {
        score: 0,
        count: 0,
      },

      {
        score: 10,
        count: 6,
      },

      {
        score: 20,
        count: 13,
      },

      {
        score: 30,
        count: 2,
      },

      {
        score: 40,
        count: 5,
      },

      {
        score: 50,
        count: 2,
      },

      {
        score: 60,
        count: 10,
      },

      {
        score: 70,
        count: 40,
      },

      {
        score: 80,
        count: 50,
      },

      {
        score: 90,
        count: 67,
      },

      {
        score: 100,
        count: 2,
      },
    ];

    this.chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width: 800, // 指定图表宽度
      height: 300, // 指定图表高度
    });

    // word cloud

    this.chart.source(this.data);
    this.chart.interval().position('score*count');
    //  渲染图表
    this.chart.render();
  }

  ngOnInit() {
    this.chartData();
    this.renderGauge();
    this.routeInfo.params.subscribe((params: Params) => {
      this.classId = params['classId'];
    });

    this.menuitems.push('面向对象Java周考一');
    this.menuitems.push('面向对象Java周考二');
    this.menuitems.push('面向对象Java周考三');
    this.menuitems.push('面向对象Java周考四');
    this.selected = this.menuitems[0];
  }

  selectChange(item: string) {
    this.selected = item;
  }

  private renderGauge() {
    var Shape = G2.Shape;

    Shape.registerShape('point', 'pointer', {
      drawShape: function drawShape(cfg, group) {
        var center = this.parsePoint({
          // 获取极坐标系下画布中心点
          x: 0,
          y: 0,
        });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: cfg.x,
            y2: cfg.y,
            stroke: cfg.color,
            lineWidth: 5,
            lineCap: 'round',
          },
        });
        return group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 9.75,
            stroke: cfg.color,
            lineWidth: 4.5,
            fill: '#fff',
          },
        });
      },
    });

    var d = [
      {
        value: 8.6,
      },
    ];
    var c = new G2.Chart({
      container: 'gauge',
      forceFit: true,
      height: 300,
      padding: [0, 0, 30, 0],
    });
    c.source(d);
    c.coord('polar', {
      startAngle: (-9 / 8) * Math.PI,
      endAngle: (1 / 8) * Math.PI,
      radius: 0.75,
    });
    c.scale('value', {
      min: 0,
      max: 9,
      tickInterval: 1,
      nice: false,
    });

    c.axis('1', false);
    c.axis('value', {
      zIndex: 2,
      line: null,
      label: {
        offset: -16,
        textStyle: {
          fontSize: 18,
          textAlign: 'center',
          textBaseline: 'middle',
        },
      },
      subTickCount: 4,
      subTickLine: {
        length: -8,
        stroke: '#fff',
        strokeOpacity: 1,
      },
      tickLine: {
        length: -17,
        stroke: '#fff',
        strokeOpacity: 1,
      },
      grid: null,
    });
    c.legend(false);
    c.point()
      .position('value*1')
      .shape('pointer')
      .color('#1890FF')
      .active(false);

    // 绘制仪表盘背景
    c.guide().arc({
      zIndex: 0,
      top: false,
      start: [0, 0.945],
      end: [9, 0.945],
      style: {
        // 底灰色
        stroke: '#CBCBCB',
        lineWidth: 18,
      },
    });
    // 绘制指标
    c.guide().arc({
      zIndex: 1,
      start: [0, 0.945],
      end: [d[0].value, 0.945],
      style: {
        stroke: '#1890FF',
        lineWidth: 18,
      },
    });
    // 绘制指标数字
    c.guide().html({
      position: ['50%', '95%'],
      html:
        '<div style="width: 300px;text-align: center;">' +
        '<p style="font-size: 20px; color: #545454;margin: 0;">及格率</p>' +
        '<p style="font-size: 24px;color: #545454;margin: 0;">' +
        d[0].value * 10 +
        '%</p>' +
        '</div>',
    });

    c.render();
  }
}
