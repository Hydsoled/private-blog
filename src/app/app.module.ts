import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AppRoutingModule} from './app-routing.module';
import {BodyComponent} from './main/body/body.component';
import {FooterComponent} from './main/footer/footer.component';
import {MainComponent} from './main/main.component';
import {PostResolver} from './main/body/content/posts/post/post-resolver.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './authentication/auth-guard.service';
import {BodyModule} from './main/body/body.module';
import {HeaderModule} from './main/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    BodyComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BodyModule,
    HeaderModule
  ],
  providers: [PostResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
