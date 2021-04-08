import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onClickLogout(): void {
    this.authService.authenticatedUser = false;
    this.authService.deleteCookie();
    this.router.navigate(['/auth']);
  }

}
