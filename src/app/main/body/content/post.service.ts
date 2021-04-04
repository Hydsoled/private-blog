import {Injectable} from '@angular/core';
import {Post} from './posts/post/post.model';
import {React} from './posts/post/react.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postImageUrl = 'https://media-exp1.licdn.com/dms/image/C4D03AQGwKPei9F7__Q/profile-displayphoto-shrink_800_800/0/1602147849378?e=1622678400&v=beta&t=HTFicOmjUy9sQD-quCSrfVmDHzcdqtT9-fFtXPojAA0';
  postTitle = 'Dato';
  postDescription = 'Naruto da Dato magaria';
  reacts: React = {
    like: 10,
    dislike: 2,
    love: 1
  };

  constructor() {
  }

  getPost(id: number): Post {
    return {
      id: null,
      title: this.postTitle,
      description: this.postDescription,
      image: this.postImageUrl,
      reacts: this.reacts,
      author: null,
      createdAt: null,
      updatedAt: null,
    };
  }
}
