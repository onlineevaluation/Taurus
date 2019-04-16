import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../entity/Result';

@Injectable()
export class StudentPageService {
  constructor(private http: HttpClient) {}

  getStudentPageScore(pageId: number, studentId: number): Observable<Result> {
    return this.http.get<Result>(`/page/Score/${pageId}/${studentId}`);
  }
  getStudentInfo(studentId: number): Observable<Result> {
    return this.http.get<Result>(`/user/profile/student/${studentId}`);
  }
}
