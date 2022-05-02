import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  public user: string = '';
  public mail: string = '';
  public password: string = '';
  public error: boolean = false;
  public success: boolean = false;
  private API = 'http://127.0.0.1:3000/signup';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.error = params['r'] === 'error' ? true : false;
      this.success = params['r'] === 'success' ? true : false;
    });
  }

  submit(): void {
    const headers = { 'Content-Type': 'application/json' };
    this.http
      .post(
        this.API,
        {
          user: this.user,
          mail: this.mail,
          password: this.password,
        },
        { headers }
      )
      .subscribe((data: any) => {
        if (data.result === 'error') {
          const queryParams = { r: 'error' };
          this.router.navigate(['signup'], { queryParams: queryParams });
        }

        if (data.result === 'ok') {
          const queryParams = { r: 'success' };
          this.router.navigate(['signup'], {
            queryParams: queryParams,
          });
        }
      });
  }
}
