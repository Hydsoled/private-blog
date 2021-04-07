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
    const expirationDate = new Date(new Date().getTime() + expDate * 1000);
    const user = new User(
      email,
      id,
      token,
      expirationDate
    );
    document.cookie = 'user=' + JSON.stringify(user) + ';';
    this.user.next(user);
  }

  autoLogin(): void {
    const cookie = document.cookie.substring(5);
    if (!cookie) {
      return;
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(cookie);
    const loadUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadUser.token) {
      console.log('hey');
      this.user.next(loadUser);
    }
  }
}
