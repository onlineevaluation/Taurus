import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from 'src/app/entity/Info';
import { PaperTitleEmitterInfo } from 'src/app/entity/EmitterInfo';

@Component({
  selector: 'app-select-title',
  templateUrl: './select-title.component.html',
  styleUrls: ['./select-title.component.less'],
})
export class SelectTitleComponent implements OnInit {
  @Output() paperTitleEmitterInfo = new EventEmitter<PaperTitleEmitterInfo>();

  private _titlesList: Array<Array<Title>> = [];
  tabsName: Array<string> = [];
  @Input()
  set titlesList(titlesList: Array<Array<Title>>) {
    this._titlesList = titlesList;
    titlesList.forEach((titles: Array<Title>) => {
      if (titles.length != 0) {
        if (titles[0].category == '1') {
          this.tabsName.push('选择题');
          // this.choiceTitleList = titles;
          titles.forEach((title: Title) => {
            this.choiceTitleList.push({
              label:
                title.title +
                '  ' +
                ' A:' +
                title.sectionA +
                ' B:' +
                title.sectionB +
                ' C:' +
                title.sectionC +
                ' D:' +
                title.sectionD,
              value: title.id + '%' + title.difficulty,
            });
          });
        }
        if (titles[0].category == '2') {
          this.tabsName.push('填空题');
          titles.forEach((title: Title) => {
            this.blankTitleList.push({
              label: title.title + ' \n答案 ' + title.answer,
              value: title.id + '%' + title.difficulty,
            });
          });
        }
        if (titles[0].category == '3') {
          this.tabsName.push('简答题');

          titles.forEach((title: Title) => {
            this.answerTitleList.push({
              label: title.title + ' \n答案 ' + title.answer,
              value: title.id + '%' + title.difficulty,
            });
          });
        }
        if (titles[0].category == '4') {
          this.tabsName.push('代码题');

          titles.forEach((title: Title) => {
            this.codeTitleList.push({
              label: title.title,
              value: title.id + '%' + title.difficulty,
            });
          });
        }
        if (titles[0].category == '5') {
          this.tabsName.push('算法题');

          titles.forEach((title: Title) => {
            this.algorithmTitleList.push({
              label: title.title,
              value: title.id + '%' + title.difficulty,
            });
          });
        }
      }
    });
  }

  get titlesList(): Array<Array<Title>> {
    return this._titlesList;
  }

  validateForm: FormGroup;
  diffiTotal: number = 0.0;
  titleTottal: number = 0;
  selectOfSelectedValue: Array<string> = [];
  blankOfSelectedValue: Array<string> = [];
  answerOfSelectedValue: Array<string> = [];
  codeOfSelectedValue: Array<string> = [];
  algorithmOfSelectedValue: Array<string> = [];

  totalScore: number = 0;
  isAuto: boolean;
  type: string = '1';
  choiceTitleList: Array<{ label: string; value: string }> = [];
  blankTitleList: Array<{ label: string; value: string }> = [];
  answerTitleList: Array<{ label: string; value: string }> = [];
  codeTitleList: Array<{ label: string; value: string }> = [];
  algorithmTitleList: Array<{ label: string; value: string }> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      paperTitle: [null, [Validators.required]],
      choiceScore: [null, [Validators.required]],
      blankScore: [null, [Validators.required]],
      answerScore: [null, [Validators.required]],
      codeScore: [null, [Validators.required]],
      algorithmScore: [null, [Validators.required]],
    });
  }

  generatePaper(bool: boolean) {
    this.isAuto = bool;
  }

  choiceLog(value: string[]) {
    this.selectOfSelectedValue = value;
    this.calTotalScore();
    // this.calDiffi();
  }
  blankLog(value: string[]) {
    this.blankOfSelectedValue = value;
    this.calTotalScore();
    // this.calDiffi();
  }
  answerLog(value: string[]) {
    this.answerOfSelectedValue = value;
    this.calTotalScore();
    // this.calDiffi();
  }
  codeLog(value: string[]) {
    this.codeOfSelectedValue = value;
    this.calTotalScore();
    // this.calDiffi();
  }
  algorithmLog(value: string[]) {
    this.algorithmOfSelectedValue = value;
    this.calTotalScore();
    // this.calDiffi();
  }

  /**
   * 计算试卷总分
   * 计算方式
   * 总分  = 选择题数量×选择题单个分数+填空题数量×填空题单个数量+。。。。+
   */
  calTotalScore() {
    const choiceScore = this.validateForm.get('choiceScore').value;
    const blankScore = this.validateForm.get('blankScore').value;
    const answerScore = this.validateForm.get('answerScore').value;
    const codeScore = this.validateForm.get('codeScore').value;
    const algorithmScore = this.validateForm.get('algorithmScore').value;

    this.totalScore =
      choiceScore * this.selectOfSelectedValue.length +
      blankScore * this.blankOfSelectedValue.length +
      answerScore * this.answerOfSelectedValue.length +
      codeScore * this.codeOfSelectedValue.length +
      algorithmScore * this.answerOfSelectedValue.length;
    this.titleTottal =
      this.selectOfSelectedValue.length +
      this.blankOfSelectedValue.length +
      this.answerOfSelectedValue.length +
      this.codeOfSelectedValue.length +
      this.algorithmOfSelectedValue.length;

    var choiceDiffi = 0.0;
    var blankDiffi = 0.0;
    var answerDiffi = 0.0;
    var codeDiffi = 0.0;
    var algorithmDiffi = 0.0;
    this.selectOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const sdiff = parseFloat(str[1]);
      choiceDiffi += sdiff * choiceScore;
    });

    this.blankOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const bdiff = parseFloat(str[1]);
      blankDiffi += bdiff * blankScore;
    });
    this.answerOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const adiff = parseFloat(str[1]);
      answerDiffi += adiff * answerScore;
    });
    this.codeOfSelectedValue.forEach(element => {
      const str = element.split('%');
      var cdiff = parseFloat(str[1]);
      codeDiffi += cdiff * codeScore;
    });
    this.algorithmOfSelectedValue.forEach(element => {
      const str = element.split('%');
      var aldiff = parseFloat(str[1]);
      algorithmDiffi += aldiff * algorithmScore;
    });
    this.diffiTotal =
      (choiceDiffi + blankDiffi + codeDiffi + answerDiffi + algorithmDiffi) /
      this.totalScore;

    let paperTitleInfo = new PaperTitleEmitterInfo();
    paperTitleInfo.paperTitle = this.validateForm.get('paperTitle').value;
    paperTitleInfo.totalScore = this.totalScore;
    this.selectOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const id = parseInt(str[0]);
      paperTitleInfo.choiceTitlesId.push(id);
    });
    this.blankOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const id = parseInt(str[0]);
      paperTitleInfo.blankTitlesId.push(id);
    });
    this.answerOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const id = parseInt(str[0]);
      paperTitleInfo.answerTitlesId.push(id);
    });
    this.codeOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const id = parseInt(str[0]);
      paperTitleInfo.codeTitlesId.push(id);
    });

    this.algorithmOfSelectedValue.forEach(element => {
      const str = element.split('%');
      const id = parseInt(str[0]);
      paperTitleInfo.algorithmTitlesId.push(id);
    });
    this.paperTitleEmitterInfo.emit(paperTitleInfo);
  }
}
