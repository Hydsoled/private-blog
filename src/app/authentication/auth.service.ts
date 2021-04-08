import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthDataInterface} from './authData.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = 'AIzaSyC_oxLTiceleAGOqSX1ckiFkibKVBGAZPM';
  API_SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;
  API_SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;
  authenticatedUser = false;
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
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
    const now = new Date();
    now.setTime(now.getTime() + expDate * 1000);
    const expirationDate = now.toUTCString();
    const user = new User(id, token);
    this.setCookie(user, expirationDate);
  }

  autoLogin(): void {
    const cookie = document.cookie;
    const [key, value] = cookie.split('=');
    this.user.next({id: key, token: value});
  }

  setCookie(user, exDate): void {
    document.cookie = user.id + '=' + user.token + ';expires=' + exDate;
    this.authenticatedUser = true;
  }

  deleteCookie(): void {
    const cookie = document.cookie;
    const [key, value] = cookie.split('=');
    const now = new Date();
    document.cookie = key + '=' + value + ';expires=' + now.toUTCString();
  }
}
