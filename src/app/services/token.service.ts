import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../inferfaces/user';
import { exists } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private cookieService: CookieService
  ) { }

  setToken(user: IUser) {
    this.cookieService.set( 'AdminSystemGalponToken', user.token );
  }

  getToken() {
    return this.cookieService.get('AdminSystemGalponToken');
  }

  deleteToken() {
    this.cookieService.delete('AdminSystemGalponToken');
  }

  getTokenPayload() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));
    }
    return payload;
  }
}
