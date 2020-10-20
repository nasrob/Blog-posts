import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input()
  aPost: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
