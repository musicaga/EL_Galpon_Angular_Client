import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) { }

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
        console.log(resp);
        this.postForm.reset();
      },
      error => {
        console.log(error);
      }
    )

  }

}
