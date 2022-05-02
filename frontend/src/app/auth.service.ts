import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean;
  private API = 'http://127.0.0.1:3000/login';

  constructor(private router: Router, private http: HttpClient) {
    this.isLoggedIn = false;
  }
  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  login(user: string, password: string): void {
    const headers = { 'Content-Type': 'application/json' };
    this.http
      .post(
        this.API,
        {
          user: user,
          password: password,
        },
        { headers }
      )
      .subscribe((data: any) => {
        if (data.login === 'ok') {
          this.isLoggedIn = true;
          this.router.navigate(['feed']);
        } else {
          const queryParams = { msg: 'error' };
          this.router.navigate(['login'], { queryParams: queryParams });
        }
      });
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
