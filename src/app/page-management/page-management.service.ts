import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../entity/Result';

@Injectable()
export class PageManagementService {
  constructor(private http: HttpClient) {}

  getCourseByTeacherId(teacherId: number): Observable<Result> {
    return this.http.get<Result>(`/course/teacher/${teacherId}`);
  }
  sendPaperTypeIds() {
    this.http.post(``, {});
  }
}
