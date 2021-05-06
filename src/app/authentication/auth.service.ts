import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthDataInterface} from './authData.interface';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = 'AIzaSyC_oxLTiceleAGOqSX1ckiFkibKVBGAZPM';
  API_SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;
  API_SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;
  authenticatedUser = false;
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  signUp(mail: string, pass: string): Observable<AuthDataInterface> {
    return this.http.post<AuthDataInterface>(this.API_SIGN_UP, {
      email: mail,
      password: pass,
      returnSecureToken: true
    }).pipe(tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }));
  }

  signIn(mail: string, pass: string): Observable<AuthDataInterface> {
    return this.http.post<AuthDataInterface>(this.API_SIGN_IN, {
      email: mail,
      password: pass,
      returnSecureToken: true
    }).pipe(tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }));
  }

  handleAuthentication(email, id, token, expDate): void {
    const user = new User(id, token);
    this.setCookie('_ID', user.id, expDate);
    this.setCookie('SESSID', user.token, expDate);
    this.user.next(user);
  }

  autoLogin(): void {
    const cookie = this.getCookie();
    this.user.next({id: cookie._ID, token: cookie.SESSID});
  }

  getCookie(): any {
    return this.cookieService.getAll();
  }

  setCookie(key, value, exDate): void {
    const now = new Date();
    now.setTime(now.getTime() + exDate * 1000);
    this.cookieService.set(key, value, now, '/', 'localhost', true, 'Strict');
    this.authenticatedUser = true;
  }

  deleteCookie(): void {
    this.cookieService.deleteAll();
    this.authenticatedUser = false;
    this.user.next(null);
  }
}
