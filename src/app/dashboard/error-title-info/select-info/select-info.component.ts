import { Component, OnInit, Input } from '@angular/core';
import { TitleErrorInfo, ErrorInfo } from 'src/app/entity/Info';

@Component({
  selector: 'app-select-info',
  templateUrl: './select-info.component.html',
  styleUrls: ['./select-info.component.less'],
})
export class SelectInfoComponent implements OnInit {
  @Input() choiceErrorList: Array<ErrorInfo> = [];
  single = [];
  constructor() {}

  ngOnInit() {
    console.log('title ', this.choiceErrorList);
  }
}
