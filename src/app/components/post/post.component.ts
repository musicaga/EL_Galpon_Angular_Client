import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;
  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getPosts({
      populate: 'likes,comments,user'
    }).subscribe(resp => {
      this.posts = resp.data;
    })
  }

  formatDate(value: string) {
    return moment(value, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format('L');
  }

}
