import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss']
})
export class CreatPostComponent implements OnInit {

  newPost: BlogPost;

  @Output()
  createPost = new EventEmitter<BlogPost>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost(post: BlogPost) {
    console.log(post)
    this.newPost = post;
    this.createPost.next(post);
  }

}
