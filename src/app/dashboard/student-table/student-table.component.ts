import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.less'],
})
export class StudentTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // You need to change it as well!
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfData: Array<{
    name: string;
    number: string;
    score: number;
    [key: string]: string | number;
  }> = [
    {
      name: 'John Brown',
      number: '1514010631',
      score: 83,
    },
    {
      name: 'Jim Green',
      number: '1514030211',
      score: 67,
    },
    {
      name: 'Joe Black',
      number: '1513010631',
      score: 78,
    },
    {
      name: 'Jim Red',
      number: '15632032',
      score: 80,
    },
  ];
  // You need to change it as well!
  listOfDisplayData: Array<{
    name: string;
    age: number;
    address: string;
    [key: string]: string | number;
  }> = [];
}
