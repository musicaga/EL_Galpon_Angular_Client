import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../../inferfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg: string;
  loading: boolean;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signupUser() {
    this.loading = true;
    const user: IUser = {
      ...this.signupForm.value,
      applicationRole: 'USER',
      application: '5ce01e90faf3940017b6b0b2',
      company: '5ce0861d108c40bc915572ce'
    }
    this.authService.registerUser(user).subscribe(
      resp => {
        this.signupForm.reset();
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.errorMsg = typeof error.error.msg === 'string'
          ? error.error.msg : 'error';
      })
  }

}
