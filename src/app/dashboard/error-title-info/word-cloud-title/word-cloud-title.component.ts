import { Component, OnInit, Input } from '@angular/core';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';
import { ErrorInfo } from 'src/app/entity/Info';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-word-cloud-title',
  templateUrl: './word-cloud-title.component.html',
  styleUrls: ['./word-cloud-title.component.less'],
})
export class WordCloudTitleComponent implements OnInit {
  @Input() errorTitleInfo: ErrorInfo;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1000,
    height: 400,
    overflow: false,
    randomizeAngle: true,
  };

  data: CloudData[] = [];
  constructor() {}

  ngOnInit() {
    console.log('试题数据', this.errorTitleInfo.frequency);
    const map = this.errorTitleInfo.frequency;
    let newData: CloudData[] = [];
    for (let key in map) {
      newData.push({ text: key.toString(), weight: map[key] });
    }
    console.log('new data ', newData);

    const changedData$: Observable<CloudData[]> = of(newData);
    changedData$.subscribe(res => (this.data = res));
  }
}
