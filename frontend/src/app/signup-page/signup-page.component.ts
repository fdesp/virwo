import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
