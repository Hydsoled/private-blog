import {Injectable} from '@angular/core';
import {Post} from './post/post.model';
import {React} from './post/react.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postImageUrl = 'assets/dato.jpeg';
  postTitle = 'Dato';
  postDescription = 'Naruto da Dato magaria';
  postId = '27';
  reacts: React = {
    like: 10,
    dislike: 2,
    love: 1
  };
  posts: Post[];

  constructor() {
  }

  getAllPosts(): Post[] {
    this.posts = [];
    for (let i = 0; i < 7; i++) {
      this.posts.push(
        {
          id: (Number(this.postId) + i).toString(),
          title: this.postTitle + i,
          description: this.postDescription,
          image: this.postImageUrl,
          reacts: new React(this.reacts.like, this.reacts.dislike, this.reacts.love),
          author: null,
          category: null,
          createdAt: null,
          updatedAt: null,
        }
      );
    }
    return this.posts;
  }

  getPost(id: string): Post {
    return this.posts.find(post => {
      if (post.id === id) {
        return post;
      }
    });
  }
}
