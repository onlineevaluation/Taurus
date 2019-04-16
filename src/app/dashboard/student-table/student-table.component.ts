import { Component, OnInit, Input } from '@angular/core';
import { StudentAndScoreInfo } from 'src/app/entity/Info';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less'],
})
export class StudentTableComponent implements OnInit {
  @Input() studentScore: Array<StudentAndScoreInfo> = [];
  @Input() pageId: number;
  constructor(private router: Router) {}

  ngOnInit() {}

  sortName: string | null = null;
  sortValue: string | null = null;

  // /student-page
  toRouter(studentId: number) {
    this.router.navigate(['/student-page', studentId, this.pageId]);
  }
}
