import { PageClassParam } from "../entity/Params";
import { Result } from "src/app/entity/Result";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ListPageService {
  constructor(private http: HttpClient) {
  }

  getAllPageInfo(): Observable<Result> {
    return this.http.get<Result>(`/paper/p`);
  }

  getPageDetail(pageId: number): Observable<Result> {
    return this.http.get<Result>(`/paper/p/${pageId}`);
  }

  getClassByTeacherId(teacherId: number): Observable<Result> {
    return this.http.get<Result>(`/class/teacher/${teacherId}`);
  }

  postPaperClassPlan(pageClassParam: PageClassParam): Observable<Result> {
    return this.http.post<Result>(`/paper/class`, pageClassParam);
  }
}
