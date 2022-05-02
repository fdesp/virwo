import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feed-navbar',
  templateUrl: './feed-navbar.component.html',
  styleUrls: ['./feed-navbar.component.css'],
})
export class FeedNavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
}
