import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Global } from './url.service';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { IQueryParams } from '../inferfaces/queryParams';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url: string;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    this.url = Global.url_api;
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`${this.url}/posts`, post)
  }

  getPosts(query: IQueryParams): Observable<any> {
    let params = new HttpParams();
    for (const param in query) {
      if (query.hasOwnProperty(param) && query[param]) {
        params = params.set(param, query[param]);
      }
    }
    return this.http.get(`${this.url}/posts`, { params });
  }
}
