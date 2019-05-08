import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../entity/User';
import { Router } from '@angular/router';
import { authInfo } from '../utils/auth.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  submitForm(): void {
    const username = this.validateForm.get('userName').value;
    const password = this.validateForm.get('password').value;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const user = new User();
    user.username = username;
    user.password = password;

    this.loginService.doLogin(user).subscribe(
      (bool: boolean) => {
        if (bool) {
          if (authInfo().roles.indexOf('teacher') != -1) {
            this.loginService.getProfile();

          }
        } else {
        }
      },
      (error: Error) => {
      },
      ()=> {
        this.router.navigateByUrl('/');
      }
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
