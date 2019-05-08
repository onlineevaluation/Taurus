import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Result } from "../entity/Result";
import { User } from "../entity/User";
import { authInfo } from "../utils/auth.util";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  private loginUrl: string = "/user/login";

  /**
   * 用户验证用户登录，并保存 token
   * @param user 登录用户
   */
  doLogin(user: User): Observable<boolean> {
    return this.http.post<Result>(this.loginUrl, user).pipe(
      map(
        (result: Result) => {
          // 将用户设置一下
          localStorage.setItem("token", `Bearer ${result.data}`);
          return true;
        },
        error => {
          return false;
        }
      )
    );
  }

  /**
   * 获取用户信息
   */
  getProfile() {
    this.http
      .get<Result>(`/user/profile/${authInfo().userId}`)
      .subscribe((result: Result) => {
        localStorage.setItem("profile", JSON.stringify(result.data));
      });
  }
}
