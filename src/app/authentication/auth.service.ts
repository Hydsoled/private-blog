import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_SIGN_UP = '/api/register';
  API_SIGN_IN = '/api/login';
  API_LOG_OUT = '/api/logout';
  authenticatedUser = false;
  user = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  signUp(name: string, mail: string, pass: string): Observable<any> {
    return this.http.post<string>(this.API_SIGN_UP, {
      nickname: name,
      email: mail,
      password: pass
    });
  }

  signIn(mail: string, pass: string): Observable<any> {
    return this.http.post<string>(this.API_SIGN_IN, {
      email: mail,
      password: pass
    });
  }

  autoLogin(): void {
    const {SESSID} = this.getCookie();
    (SESSID) ? this.user.next(true) : this.user.next(false);
  }

  deleteCookie(): Observable<any> {
    const {SESSID} = this.getCookie();
    return this.http.post(this.API_LOG_OUT, {
      ses_id: SESSID
    });
  }

  getCookie(): any {
    return this.cookieService.getAll();
  }
}
