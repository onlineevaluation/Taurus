import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { StudentAndScoreInfo } from 'src/app/entity/Info';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less'],
})
export class StudentTableComponent implements OnInit {
  @Input() studentScore: Array<StudentAndScoreInfo> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('table', this.studentScore);
  }

  sortName: string | null = null;
  sortValue: string | null = null;

  // /student-page
  toRouter(studentId: number) {
    this.router.navigate(['/student-page', studentId]);
  }
}
