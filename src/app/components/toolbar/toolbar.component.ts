import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { IUser } from '../../inferfaces/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: IUser;
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    const payload = this.tokenService.getTokenPayload();
    this.user = payload.tokenUser;
  }

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/']);
  }

}
