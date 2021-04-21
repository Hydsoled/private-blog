import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void{
    this.authService.deleteCookie();
    this.router.navigate(['auth']);
  }

}
