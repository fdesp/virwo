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
  //public articles: any;

  public articles = [
    {
      title: 'Pair Mixes It up + Hacks Its Own Product for a Client Request',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title: 'Pair Mixes It up + Hacks Its Own Product for a Client Request',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title: 'Pair Mixes It up + Hacks Its Own Product for a Client Request',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title: 'Pair Mixes It up + Hacks Its Own Product for a Client Request',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title: 'Pair Mixes It up + Hacks Its Own Product for a Client Request',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title: 'React vs. Angular: Why Is React So Much More Popular?',
      source: {
        name: 'Design-milk.com',
      },
      description:
        'How do you choose between these two popular front-end frameworks? Start by looking at their performance and what they’re like to code in.',
      url: 'https://www.makeuseof.com/react-vs-angular-popular/',
      urlToImage:
        'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/03/HTML-Code-on-a-Computer-Screen.jpg',
    },
    {
      title:
        'heise-Angebot: enterJS 2022: Frühbucherrabatt noch bis zum 4. Mai sichern',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
    {
      title:
        'Architect Daniel Libeskind’s Redesigned Richard Hennessy Decanter',
      source: {
        name: 'Design-milk.com',
      },
      description:
        "San Francisco-based Pair doesn't make lighting but it hacks its Mix collection to create custom lighting for a client's industrial office",
      url: 'https://design-milk.com/pair-mixes-it-up-hacks-its-own-product-for-a-client-request/',
      urlToImage: 'https://design-milk.com/images/2022/04/pair-mix-hack-11.jpg',
    },
  ];

  constructor(private http: HttpClient) {
    // this.requestFeed();
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
    /// this.requestFeed();
  }

  updateFilterSearch(query: string): void {
    if (query === 'local') {
      this.language = 'es';
    } else {
      this.language = '';
    }
    console.log(this.language);
    // this.requestFeed();
  }

  updateDateSearch(date: string): void {
    this.from = date ? date : '';
    // this.requestFeed();
  }
}
