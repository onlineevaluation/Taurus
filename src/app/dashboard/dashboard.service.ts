import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from '../entity/Result';
import { Observable } from 'rxjs';
@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  getTop10Student(
    pageId: number,
    classId: number,
    teacherId: number,
  ): Observable<Result> {
    let classAndPageParam = new HttpParams()
      .set('teacherId', `${teacherId}`)
      .set('pageId', `${pageId}`)
      .set('classId', `${classId}`);

    return this.http.get<Result>('/class/top10', { params: classAndPageParam });
  }
  getClassAllExamPage(classId: number): Observable<Result> {
    return this.http.get<Result>(`/page/exams/${classId}`);
  }
}
