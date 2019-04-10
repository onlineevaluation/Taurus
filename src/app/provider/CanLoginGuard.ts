import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { authInfo } from '../utils/auth.util';

@Injectable()
export class CanLoginGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private message: NzMessageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.check();
  }

  check(): Observable<boolean> {
    return new Observable(observer => {
      const token = localStorage.getItem('token');
      const role = authInfo().roles.toString();
      if (token === null) {
        this.message.create('warning', '您还没有登录，请登录');
        localStorage.clear();
        observer.next(false);
        observer.complete();
        this.router.navigateByUrl('/login');
        return;
      }
      if (role.indexOf('teacher') == -1) {
        this.message.create('error', '您没有权限登录教师管理系统');
        localStorage.clear();
        observer.next(false);
        observer.complete();
        this.router.navigateByUrl('/login');
        return;
      } else {
        observer.next(true);
        observer.complete();
        return;
      }
    });
  }
}
