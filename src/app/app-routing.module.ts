import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './main/body/content/about/about.component';
import {HomeComponent} from './main/body/content/home/home.component';
import {PostsComponent} from './main/body/content/posts/posts.component';
import {PostComponent} from './main/body/content/posts/post/post.component';
import {PostResolver} from './main/body/content/posts/post/post-resolver.service';

const appRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: '/posts', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'post/:id/:author', component: PostComponent, resolve: {post: PostResolver}}
    ]
  },
  {path: 'auth', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
