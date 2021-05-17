import {Component, OnInit} from '@angular/core';
import {AuthService} from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.authService.user.subscribe((user) => {
      this.authService.authenticatedUser = user;
      this.auth = user;
    });
  }
}
