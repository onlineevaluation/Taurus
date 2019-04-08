import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-title',
  templateUrl: './select-title.component.html',
  styleUrls: ['./select-title.component.less'],
})
export class SelectTitleComponent implements OnInit {
  isAuto: boolean;
  type: string = '1';
  constructor() {}
  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1',
        },
      ],
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2',
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3',
    },
  ];
  ngOnInit() {}

  generatePaper(bool: boolean) {
    this.isAuto = bool;
    console.log(this.type);
  }
}
