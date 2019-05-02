import { Router } from "@angular/router";
import { PaperInfo } from "src/app/entity/Info";
import { ListPageService } from "./list-page.service";
import { Component, OnInit } from "@angular/core";
import { Result } from "../entity/Result";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less'],
})
export class ListPageComponent implements OnInit {
  pageListOfData: Array<PaperInfo> = [];

  constructor(
    private listPageService: ListPageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.listPageService.getAllPageInfo().subscribe((result: Result) => {
      this.pageListOfData = result.data;
      console.log('data ', this.pageListOfData);
    });
  }

  showPage(pageId: number) {
    this.router.navigate(['list-page/show', pageId]);
  }
}
