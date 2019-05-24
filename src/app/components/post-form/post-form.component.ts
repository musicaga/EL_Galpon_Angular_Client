import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../../services/post.service';
import io from 'socket.io-client';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  socket: any;
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) {
    this.socket = io('http://localhost:3500/api/v1');
    this.socket.emit('refresh_posts', {
      data: 'refresh_posts'
    })
   }

  ngOnInit() {
    this.init();
  }

  init() {
    this.postForm = this.fb.group({
      message: ['']
    })
  }

  addPost() {
    this.postService.addPost(this.postForm.value).subscribe(
      resp => {
        this.socket.emit('refresh_posts', {
          data: 'refresh_posts'
        })
        this.postForm.reset();
      },
      error => {
        console.log(error);
      }
    )

  }

}
