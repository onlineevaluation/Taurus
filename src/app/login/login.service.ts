import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../entity/Result';
import { User } from '../entity/User';
import { map } from 'rxjs/operators';
import { authInfo } from '../utils/auth.util';
import { JwtUser } from '../entity/JwtUser';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  private jwtHelperService = new JwtHelperService();
  private loginUrl: string = '/user/login';
  /**
   * 用户验证用户登录，并保存 token
   * @param user 登录用户
   */
  doLogin(user: User): Observable<boolean> {
    return this.http.post<Result>(this.loginUrl, user).pipe(
      map(
        (result: Result) => {
          const user = this.jwtHelperService.decodeToken(result.data);
          const jwtUser = new JwtUser();
          jwtUser.exp = user.exp;
          jwtUser.iat = user.iat;
          jwtUser.sub = user.sub;
          jwtUser.classId = user.classId;
          jwtUser.userId = user.userId;
          // 将用户设置一下
          localStorage.setItem('token', `Bearer ${result.data}`);
          // 获取用户详细信息
          this.http
            .get<Result>(`/user/profile/${authInfo().userId}`)
            .subscribe((result: Result) => {
              localStorage.setItem('profile', JSON.stringify(result.data));
            });

          return true;
        },
        error => {
          console.log('登录错误信息', error);
          return false;
        },
      ),
    );
  }
}
