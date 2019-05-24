import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;
  loading: boolean;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser() {
    this.loading = true;
    this.authService.loginUser(this.loginForm.value).subscribe(
      resp => {
        this.tokenService.setToken(resp.data);
        this.loginForm.reset();
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['streams']);
        }, 500);
      },
      error => {
        this.loading = false;
        this.errorMsg = typeof error.error.msg === 'string'
          ? error.error.msg : 'error';
      })
  }
}
