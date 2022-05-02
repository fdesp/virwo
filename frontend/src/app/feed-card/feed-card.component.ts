import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() source: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
  @Input() urlToImage: string = '';
  constructor() {}

  ngOnInit(): void {}
}
