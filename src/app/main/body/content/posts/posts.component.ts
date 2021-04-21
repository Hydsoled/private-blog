import {Component, HostListener, OnInit} from '@angular/core';
import {Post} from './post/post.model';
import {PostService} from './post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  likes = [];

  constructor(private postService: PostService, private router: Router) {

  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

  onLoadPost(post: Post): void {
    this.router.navigate(['/posts', post.id, post.title]);
  }

  handleLike(postId: string): void {
    this.posts.filter((post) => {
      if (post.id === postId) {
        if (this.likes.includes(post.id)) {
          post.reacts.like--;
          this.likes = this.likes.filter((val) => {
            if (val !== post.id) {
              return val;
            }
          });
        } else {
          post.reacts.like++;
          this.likes.push(post.id);
        }
      }
    });
  }

}
