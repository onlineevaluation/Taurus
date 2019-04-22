import { PageManagementService } from './../page-management.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherInfo } from 'src/app/entity/TeacherInfo';
import { Result } from 'src/app/entity/Result';

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.less'],
})
export class SelectSubjectComponent implements OnInit {
  teacherName: string;
  teacherId: number;
  firstGroup: FormGroup;
  items: Array<any> = [];
  selectedValue: any;
  @Output() selectedId = new EventEmitter<number>();
  @Output() checkedIdsOut = new EventEmitter<Array<number>>();
  checkOptionsOne = [
    { label: '选择题', value: 1, checked: true },
    { label: '填空题', value: 2 },
    { label: '简答题', value: 3 },
  ];
  constructor(private pageManagementService: PageManagementService) {}

  log(value: any[]): void {
    let checkedIds = value
      .filter(item => {
        return item.checked == true;
      })
      .map(item => {
        return item.value;
      });
    this.checkedIdsOut.emit(checkedIds)
  }

  ngOnInit(): void {
    const profileJson = localStorage.getItem('profile');
    const teacherInfo: TeacherInfo = JSON.parse(profileJson);
    this.teacherName = teacherInfo.name;
    this.teacherId = teacherInfo.identity;
    this.firstGroup = new FormGroup({
      teacherNameController: new FormControl(
        {
          value: this.teacherName,
          disabled: true,
        },
        Validators.required,
      ),
      subjectController: new FormControl(),
      typeController: new FormControl(),
    });
    this.firstGroup.get('typeController').setValue(this.checkOptionsOne);
    this.getCourseInfo();
    // this.selectedValue = this.items[0];
  }

  getCourseInfo() {
    this.pageManagementService.getCourseByTeacherId(this.teacherId).subscribe(
      (result: Result) => {
        console.log('course', result);
        this.items = result.data;
        this.selectedValue = this.items[0];
        console.log('select is ', this.selectedValue);
      },
      (error: Error) => {
        console.log(error.message);
      },
    );
  }
  onBlur(value: any) {
    console.log('value', value);
    this.selectedId.emit(value);
  }
}
