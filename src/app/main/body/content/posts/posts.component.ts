import {Component, HostListener, OnInit} from '@angular/core';
import {Post} from './post/post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    const singlePost = this.postService.getPost(1);
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

  onLoadPost(post: Post): void {
    this.router.navigate(['/post', post.title, post.description]);
  }

}
