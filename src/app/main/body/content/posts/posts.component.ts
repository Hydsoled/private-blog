import {Component, OnInit} from '@angular/core';
import {Post} from './post/post.model';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    const singlePost = this.postService.getPost();
    console.log(singlePost.description);
    for (let i = 0; i < 7; i++) {
      this.posts.push({
        id: singlePost.id,
        title: singlePost.title,
        description: singlePost.description,
        image: singlePost.image,
        reacts: singlePost.reacts,
        author: singlePost.author,
        createdAt: singlePost.createdAt,
        updatedAt: singlePost.createdAt,
      });
    }
  }

}
