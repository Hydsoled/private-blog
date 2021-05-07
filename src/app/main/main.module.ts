import {NgModule} from '@angular/core';
import {ContentComponent} from './content/content.component';
import {PostsComponent} from './content/posts/posts.component';
import {PostComponent} from './content/posts/post/post.component';
import {AboutComponent} from './content/about/about.component';
import {ChatComponent} from './content/chat/chat.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    PostsComponent,
    PostComponent,
    AboutComponent,
    ChatComponent
  ],
  imports: [RouterModule, CommonModule, MainRoutingModule, FormsModule],
  exports: [
    ContentComponent,
  ],
})
export class MainModule {

}
