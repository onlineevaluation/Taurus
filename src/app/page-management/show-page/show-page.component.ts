import { TitleInfo, PaperInfo } from 'src/app/entity/Info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.less'],
})
export class ShowPageComponent implements OnInit {
  private _paperTitleInfo: PaperInfo;
  paperTitleInfo: PaperInfo;
  selectList: Array<TitleInfo> = [];
  blankList: Array<TitleInfo> = [];
  answerList: Array<TitleInfo> = [];
  codeList: Array<TitleInfo> = [];
  algorithmList: Array<TitleInfo> = [];

  @Input()
  set paperTitleInfoParam(paperTitleParam: PaperInfo) {
    this._paperTitleInfo = paperTitleParam;
    this.paperTitleInfo = paperTitleParam;
    paperTitleParam.titles.forEach(title => {
      if (title.category == '1') {
        this.selectList.push(title);
      }
      if (title.category == '2') {
        this.blankList.push(title);
      }
      if (title.category == '3') {
        this.answerList.push(title);
      }
      if (title.category == '4') {
        this.codeList.push(title);
      }
      if (title.category == '5') {
        this.algorithmList.push(title);
      }
    });
  }

  get paperTitleInfoParam(): PaperInfo {
    return this._paperTitleInfo;
  }

  constructor() {}

  ngOnInit() {}
}
