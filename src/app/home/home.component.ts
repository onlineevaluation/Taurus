import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClassInfo } from "../entity/ClassInfo";
import { TeacherInfo } from "../entity/TeacherInfo";
import { HomeService } from "./home.service";
import { Result } from "../entity/Result";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  username: string;
  color: string = "#ffbf00";
  avatarText: string = "Nan";
  classList: Array<ClassInfo> = [];
  gridStyle = {
    width: "25%",
    textAlign: "center"
  };
  classmemberCount: number;

  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    // 获取登录用户信息
    const profileJson = localStorage.getItem("profile");
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.username = teacherInfo.name;
    this.avatarText = this.username.substring(0, 1).toLowerCase();
    this.getClassInfo(teacherInfo.identity);
    this.getStudentCount(teacherInfo.identity);
  }

  ngAfterViewInit(): void {

  }

  toDashBoard(classId: number) {
    console.log("class id", classId);
    this.router.navigate(["/dashboard", classId]);
  }

  getClassInfo(teacherId: number) {
    this.homeService.getClassInfo(teacherId).subscribe((result: Result) => {
      console.log(result);
      this.classList = result.data;
    });
  }

  getStudentCount(teahcerId: number) {
    this.homeService
      .getTeacherAllStudentCount(teahcerId)
      .subscribe((result: Result) => {
        console.log("count ", result);
        this.classmemberCount = result.data;
      });
  }
}
