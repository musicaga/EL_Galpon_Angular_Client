import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url: string;
  constructor(
    private http: HttpClient) { 
    this.url = Global.url_api;
  }

  addPost(post: any): Observable<any> {
    return this.http.post(`${this.url}/posts`, post)
  }
}
