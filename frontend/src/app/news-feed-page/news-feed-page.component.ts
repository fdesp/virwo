import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.css'],
})
export class NewsFeedPageComponent implements OnInit {
  public query: string = 'angular';
  public language: string = '';
  public from: string = '';
  private pageSize: number = 10;
  private API = 'http://127.0.0.1:3000/feed';
  public articles: any;

  constructor(private http: HttpClient) {
    this.requestFeed();
  }

  ngOnInit(): void {}

  requestFeed(): void {
    const headers = { 'Content-Type': 'application/json' };
    this.http
      .post(
        this.API,
        {
          query: this.query,
          language: this.language,
          from: this.from,
          pageSize: this.pageSize,
        },
        { headers }
      )
      .subscribe((data: any) => {
        this.articles = data.articles;
      });
  }

  updateTermSearch(query: string): void {
    this.query = query ? query : 'angular';
    this.requestFeed();
  }

  updateFilterSearch(query: string): void {
    if (query === 'local') {
      this.language = 'es';
    } else {
      this.language = '';
    }
    this.requestFeed();
  }

  updateDateSearch(date: string): void {
    this.from = date ? date : '';
    this.requestFeed();
  }
}
