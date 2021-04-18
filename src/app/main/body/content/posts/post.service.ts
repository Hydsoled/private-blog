import {Injectable} from '@angular/core';
import {Post} from './post/post.model';
import {React} from './post/react.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postImageUrl = 'https://media-exp1.licdn.com/dms/image/C4D03AQGwKPei9F7__Q/profile-displayphoto-shrink_800_800/0/1602147849378?e=1622678400&v=beta&t=HTFicOmjUy9sQD-quCSrfVmDHzcdqtT9-fFtXPojAA0';
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
