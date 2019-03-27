import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  constructor() {}

  ngOnInit() {}
}
