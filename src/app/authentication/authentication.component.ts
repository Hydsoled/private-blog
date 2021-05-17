import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  loginMode = true;
  error: string;
  subscriptionAuth: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSwitchMode(): void {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm): void {
    const user = form.form.value;
    let authSub: Observable<string>;
    if (!this.loginMode && (user.password === user.cpassword)) {
      authSub = this.authService.signUp(user.nickname, user.email, user.password);
    } else {
      authSub = this.authService.signIn(user.email, user.password);
    }
    this.subscriptionAuth = authSub.subscribe(
      (res) => {
        if (res) {
          this.authService.user.next(true);
        }
        this.router.navigate(['/']);
      },
      (error) => {
        this.error = this.errorHandling(error);
      }
    );
  }

  errorHandling({error}): string {
    const {message} = error;
    setTimeout(() => this.error = '', 5 * 1000);
    switch (message) {
      case 'Forbidden': {
        return 'Email or Password is incorrect';
      }
      case 'EMAIL_EXIST': {
        return 'Account with this email is already created';
      }
      default: {
        return 'Unknown error';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptionAuth) {
      this.subscriptionAuth.unsubscribe();
    }
  }

}
