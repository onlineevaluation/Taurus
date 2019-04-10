import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.less'],
})
export class SelectSubjectComponent implements OnInit {
  teacherName: string = '杨晓辉';
  firstGroup: FormGroup;
  constructor() {}
  selectedValue = { label: 'json', value: 'json', checked: true };

  checkOptionsOne = [
    { label: '选择题', value: 'choice', checked: true },
    { label: '填空题', value: 'blank' },
    { label: '简答题', value: 'answer' },
  ];

  log(value: object[]): void {}

  ngOnInit(): void {
    this.firstGroup = new FormGroup({
      teacherNameController: new FormControl(
        {
          value: '杨晓辉',
          disabled: true,
        },
        Validators.required,
      ),
      subjectController: new FormControl(),
      typeController: new FormControl(),
    });
    this.firstGroup.get('subjectController').setValue(this.selectedValue);
    this.firstGroup.get('typeController').setValue(this.checkOptionsOne);
  }
}
