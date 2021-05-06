import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './content/about/about.component';
import {ChatComponent} from './content/chat/chat.component';
import {PostsComponent} from './content/posts/posts.component';
import {PostComponent} from './content/posts/post/post.component';
import {PostResolver} from './content/posts/post/post-resolver.service';
import {AuthGuard} from '../authentication/auth-guard.service';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id/:title', component: PostComponent, canActivate: [AuthGuard], resolve: {post: PostResolver}},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
