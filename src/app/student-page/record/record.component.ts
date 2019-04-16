import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less'],
})
export class RecordComponent implements OnInit {
  @Input() record: any;

  constructor() {}

  ngOnInit() {}
}
