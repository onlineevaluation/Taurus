import { TitleInfo, PaperInfo } from 'src/app/entity/Info';
import { ListPageService } from './list-page.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../entity/Result';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less'],
})
export class ListPageComponent implements OnInit {
  pageListOfData: Array<PaperInfo> = [];

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  constructor(private listPageService: ListPageService) {}

  ngOnInit() {
    this.listPageService.getAllPageInfo().subscribe((result: Result) => {
      this.pageListOfData = result.data;
      console.log('data ', this.pageListOfData);
    });
  }
}
