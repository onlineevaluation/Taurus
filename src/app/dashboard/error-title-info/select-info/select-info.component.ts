import { Component, OnInit, Input } from '@angular/core';
import { TitleErrorInfo, ErrorInfo } from 'src/app/entity/Info';

@Component({
  selector: 'app-select-info',
  templateUrl: './select-info.component.html',
  styleUrls: ['./select-info.component.less'],
})
export class SelectInfoComponent implements OnInit {
  @Input() choiceError: ErrorInfo;

  single: Array<{ name: string; value: string }> = [];

  constructor() {}

  multi: any[];

  view: any[] = [1000, 400];

  gradient = false;

  colorScheme = {
    domain: ['#80deea', '#4dd0e1', '#26c6da', '#00bcd4'],
  };

  ngOnInit() {
    console.log('title ', this.choiceError.frequency['A'] || '0');
    this.single.push({
      name: 'A',
      value: this.choiceError.frequency['A'] || '0',
    });
    this.single.push({
      name: 'B',
      value: this.choiceError.frequency['B'] || '0',
    });
    this.single.push({
      name: 'C',
      value: this.choiceError.frequency['C'] || '0',
    });
    this.single.push({
      name: 'D',
      value: this.choiceError.frequency['D'] || '0',
    });
  }
}
