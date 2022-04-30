import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  public user: string = '';
  public mail: string = '';
  public password: string = '';
  public userExists: boolean = false;
  private API = 'http://127.0.0.1:3000/signup';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit(): void {
    this.userExists = false;
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
          this.userExists = true;
        }
      });
  }
}
