import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {FooterComponent} from './main/footer/footer.component';
import {MainComponent} from './main/main.component';
import {PostResolver} from './main/content/posts/post/post-resolver.service';
import {AuthGuard} from './authentication/auth-guard.service';
import {HeaderModule} from './main/header/header.module';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MainModule,
    HeaderModule
  ],
  providers: [PostResolver, AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
