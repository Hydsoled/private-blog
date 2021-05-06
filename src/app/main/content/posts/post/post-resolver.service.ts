import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {React} from './react.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {PostService} from '../post.service';

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  reacts: React;
  author: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    this.postService.getAllPosts();
    return this.postService.getPost(route.params.id);
  }

}
