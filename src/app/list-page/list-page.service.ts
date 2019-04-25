import { Result } from 'src/app/entity/Result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ListPageService {
  constructor(private http: HttpClient) {}

  getAllPageInfo(): Observable<Result> {
    return this.http.get<Result>(`/paper/p`);
  }
}
