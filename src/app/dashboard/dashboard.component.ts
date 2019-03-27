import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  constructor(private routeInfo: ActivatedRoute) {}
  classId: number;
  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.classId = params['classId'];
    });
    console.log('classId', this.classId);
  }
}
