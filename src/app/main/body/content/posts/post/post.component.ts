import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';
import {Post} from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  post: Post;
  routeSub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.data.subscribe((data: Data) => {
      this.post = data.post;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
