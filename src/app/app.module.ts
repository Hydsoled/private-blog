import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './main/header/header.component';
import {NavigationComponent} from './main/header/navigation/navigation.component';
import {BodyComponent} from './main/body/body.component';
import {ContentComponent} from './main/body/content/content.component';
import {PostsComponent} from './main/body/content/posts/posts.component';
import {PostComponent} from './main/body/content/posts/post/post.component';
import {FooterComponent} from './main/footer/footer.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './main/body/content/about/about.component';
import {ChatComponent} from './main/body/content/chat/chat.component';
import {PostResolver} from './main/body/content/posts/post/post-resolver.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './authentication/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    NavigationComponent,
    BodyComponent,
    ContentComponent,
    PostsComponent,
    PostComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
