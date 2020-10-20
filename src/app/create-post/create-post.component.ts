import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  newPost: BlogPost;

  @Output()
  createPost = new EventEmitter<BlogPost>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost(formData: NgForm) {
    this.newPost = formData.value;
    this.createPost.next(formData.value);
  }

}
