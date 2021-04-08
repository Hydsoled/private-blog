import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthDataInterface} from './authData.interface';

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
    let authSub: Observable<AuthDataInterface>;
    if (!this.loginMode) {
      authSub = this.authService.signUp(user.email, user.password);
    } else {
      authSub = this.authService.signIn(user.email, user.password);
    }
    this.subscriptionAuth = authSub.subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.error = this.errorHandling(error);
        setTimeout(() => this.error = '', 30 * 1000);
      }
    );
  }

  errorHandling(err): string {
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS': {
        return 'The email address is already in use by another account.';
      }
      case 'OPERATION_NOT_ALLOWED': {
        return 'Password sign-in is disabled for this project.';
      }
      case 'TOO_MANY_ATTEMPTS_TRY_LATER': {
        return 'We have blocked all requests from this device due to unusual activity. Try again later.';
      }
      case 'EMAIL_NOT_FOUND': {
        return 'There is no user record corresponding to this identifier. The user may have been deleted.';
      }
      case 'INVALID_PASSWORD': {
        return 'The password is invalid or the user does not have a password.';
      }
      case 'USER_DISABLED': {
        return 'The user account has been disabled by an administrator.\n';
      }
      default: {
        return 'Unknown error';
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptionAuth.unsubscribe();
  }

}
