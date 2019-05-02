import { Component, OnInit } from "@angular/core";
import { StudentPageService } from "./student-page.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Result } from "../entity/Result";
import { PageDetailsParam, StudentProfileInfo } from "../entity/Info";

@Component({
  selector: "app-student-page",
  templateUrl: "./student-page.component.html",
  styleUrls: ["./student-page.component.less"]
})
export class StudentPageComponent implements OnInit {
  student: any;
  studentId: number;
  pageId: number;
  pageDetailsParam: PageDetailsParam = new PageDetailsParam();
  studentProfileInfo: StudentProfileInfo = new StudentProfileInfo();
  recordList: Array<any> = [];
  rL: number;

  constructor(
    private studentPageService: StudentPageService,
    private routeInfo: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.rL = this.recordList.length;
    console.log("rl:", this.rL);
    this.routeInfo.params.subscribe((params: Params) => {
      this.studentId = params["studentId"];
      this.pageId = params["pageId"];
    });

    this.getStudentScore();
    this.getStudentProfile();
  }

  getStudentScore() {
    this.studentPageService
      .getStudentPageScore(this.pageId, this.studentId)
      .subscribe((result: Result) => {
        console.log("page ", result);
        this.pageDetailsParam = result.data;
      });
  }

  getStudentProfile() {
    this.studentPageService
      .getStudentInfo(this.studentId)
      .subscribe((result: Result) => {
        this.studentProfileInfo = result.data;
      });
  }
}
