import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  logoutSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickLogout(): void {
    this.logoutSub = this.authService.deleteCookie().subscribe((res) => {
      if (res) {
        this.authService.user.next(false);
        this.router.navigate(['/auth']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.logoutSub) {
      this.logoutSub.unsubscribe();
    }
  }

}
