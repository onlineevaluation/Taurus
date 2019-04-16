import { Component, OnInit, Input } from '@angular/core';
import {
  PageDetailsParam,
  StudentAnswerSelect,
  StudentAnswer,
} from 'src/app/entity/Info';

@Component({
  selector: 'app-page-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.less'],
})
export class DetalisComponent implements OnInit {
  pageDatails: PageDetailsParam;
  private _items: PageDetailsParam;
  selects: Array<StudentAnswerSelect> = [];
  blanks: Array<StudentAnswer> = [];
  ans: Array<StudentAnswer> = [];
  algorithms: Array<StudentAnswer> = [];

  @Input()
  set items(items: PageDetailsParam) {
    console.log('items set', items);

    this._items = items;
    this.selects = this._items.select;
    this.blanks = this._items.blank;
    this.ans = this._items.ans;
    this.algorithms = this._items.algorithm;
  }

  get items(): PageDetailsParam {
    return this._items;
  }

  constructor() {}

  ngOnInit() {
    console.log('items', this.items);
  }
}
