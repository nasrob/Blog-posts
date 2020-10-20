import { Component, OnInit } from '@angular/core';
import { BlogPost } from "../models/blog-post";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: BlogPost[] = [
	{
		id: 1,
		title: "Notre Premier article",
		description: "le 1er article de cette édition",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
	},
	{
		id: 2,
		title: "Article 1, suite",
		description: "La suite du 1er article",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
	},
	{
		id: 3,
		title: "Article Externe",
		description: "Article de source Externe",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem hic quidem nobis esse perspiciatis omnis nemo dicta quaerat quam, alias soluta? Nobis corporis doloremque facilis, tempora commodi nesciunt dignissimos!",
	},
];


  constructor() { }

  ngOnInit(): void {
  }

  addPost(post: BlogPost) {
    this.posts.push(post);
  }

}
