import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url.service';
import { IUserLogin, IUser } from '../inferfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  constructor(
    private http: HttpClient) { 
    this.url = Global.url_api;
  }
  registerUser(user: IUser): Observable<any> {
    return this.http.post(`${this.url}/users/register`, user)
  }
  loginUser(user: IUserLogin): Observable<any> {
    return this.http.post(`${this.url}/users/login`, user)
  }
}
