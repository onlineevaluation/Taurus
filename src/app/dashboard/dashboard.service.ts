import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from '../entity/Result';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class DashboardService {
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * 获取班级前十名学生
   * @param pageId
   * @param classId
   * @param teacherId
   */
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
  /**
   * 获取该班级所有的学生
   * @param classId
   */
  getClassAllExamPage(classId: number): Observable<Result> {
    return this.http.get<Result>(`/page/exams/${classId}`);
  }

  /**
   * 获取成绩分析
   * @param classId
   * @param pageId
   */
  getScoreAnalytics(classId: number, pageId: number): Observable<Result> {
    return this.http.get<Result>(`/class/classScore/${classId}/${pageId}`);
  }

  getPassed(pageId: number, classId: number): Observable<Result> {
    return this.http.get<Result>(`/class/passed/${pageId}/${classId}`);
  }

  /**
   * 获取班级学生列表
   * @param classId
   * @param pageId
   */
  getClassStudents(classId: number, pageId: number): Observable<Result> {
    return this.http.get<Result>(`/class/students/${classId}/${pageId}`);
  }

  getClassErrorInPage(classId: number, pageId: number): Observable<Result> {
    return this.http.get<Result>(`/exam/class/${classId}/${pageId}`);
  }

  getErrorInfo(classId: number, pageId: number): Observable<Result> {
    return this.http.get<Result>(`/exam/error/${classId}/${pageId}`);
  }
}
