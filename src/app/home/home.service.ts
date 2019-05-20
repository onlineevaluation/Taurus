import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Result } from '../entity/Result';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  private baseUrl = '/class';

  /**
   * 通过教师id获取班级情况
   * @param teacherId 教师id
   */
  getClassInfo(teacherId: number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}/teached/${teacherId}`);
  }

  /**
   *  获取教师所带班级的学生总数
   * @param teacherId
   */
  getTeacherAllStudentCount(teacherId: number): Observable<Result> {
    return this.http.get<Result>(
      `${this.baseUrl}/students/teacher/${teacherId}`,
    );
  }

  getNotice(userId: number): Observable<Result> {
    return this.http.get<Result>(`/notice/${userId}`);
  }
}
