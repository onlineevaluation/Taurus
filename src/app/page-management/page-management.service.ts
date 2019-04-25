import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../entity/Result';
import { PaperTitleParam, PaperTitleInfoParam } from '../entity/Params';

@Injectable()
export class PageManagementService {
  constructor(private http: HttpClient) {}

  getCourseByTeacherId(teacherId: number): Observable<Result> {
    return this.http.get<Result>(`/course/teacher/${teacherId}`);
  }

  sendPaperTypeIds(pageTitleParam: PaperTitleParam): Observable<Result> {
    return this.http.post<Result>(`/paper/info`, pageTitleParam);
  }

  getChapterByCourseId(courseId: number): Observable<Result> {
    console.log('courseid is ', courseId);
    return this.http.get<Result>(`/chapter/course/${courseId}`);
  }

  postPaperInfo(paperTitleInfo: PaperTitleInfoParam): Observable<Result> {
    return this.http.post<Result>(`/paper/artificial`, paperTitleInfo);
  }
}
