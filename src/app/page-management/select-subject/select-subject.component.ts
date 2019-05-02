import { PageManagementService } from "../page-management.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TeacherInfo } from "src/app/entity/TeacherInfo";
import { Result } from "src/app/entity/Result";

@Component({
  selector: "app-select-subject",
  templateUrl: "./select-subject.component.html",
  styleUrls: ["./select-subject.component.less"]
})
export class SelectSubjectComponent implements OnInit {
  teacherName: string;
  teacherId: number;
  firstGroup: FormGroup;
  items: Array<any> = [];
  selectedValue: any;
  @Output() selectedId = new EventEmitter<number>();
  @Output() checkedIdsOut = new EventEmitter<Array<number>>();
  @Output() chapterIdsOut = new EventEmitter<Array<number>>();
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = [];

  checkOptionsOne = [
    { label: "选择题", value: 1 },
    { label: "填空题", value: 2 },
    { label: "简答题", value: 3 },
    { label: "代码题", value: 4 },
    { label: "算法题", value: 5 }
  ];

  constructor(private pageManagementService: PageManagementService) {
  }

  log(value: any[]): void {
    let checkedIds = value
      .filter(item => {
        return item.checked == true;
      })
      .map(item => {
        return item.value;
      });
    this.checkedIdsOut.emit(checkedIds);
  }

  ngOnInit(): void {
    const profileJson = localStorage.getItem("profile");
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.teacherName = teacherInfo.name;
    this.teacherId = teacherInfo.identity;
    this.firstGroup = new FormGroup({
      teacherNameController: new FormControl(
        {
          value: this.teacherName,
          disabled: true
        },
        Validators.required
      ),
      subjectController: new FormControl(),
      typeController: new FormControl(),
      chapterController: new FormControl()
    });
    this.firstGroup.get("typeController").setValue(this.checkOptionsOne);
    this.getCourseInfo();
    // this.selectedValue = this.items[0];
  }

  getCourseInfo() {
    this.pageManagementService.getCourseByTeacherId(this.teacherId).subscribe(
      (result: Result) => {
        this.items = result.data;
        this.selectedValue = this.items[0];
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }

  onBlur(value: number) {
    if (!isNaN(value)) {
      this.pageManagementService
        .getChapterByCourseId(value)
        .subscribe((result: Result) => {
          this.listOfSelectedValue = [];
          this.listOfOption = [];
          const children: Array<{ label: string; value: string }> = [];
          for (let i = 0; i < result.data.length; i++) {
            children.push({
              label: result.data[i].name,
              value: result.data[i].id
            });
          }
          this.listOfOption = children;
        });
      this.selectedId.emit(value);
    }
  }

  onSelectChapter() {
    this.chapterIdsOut.emit(this.listOfSelectedValue);
  }
}
