import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.css'],
})
export class FeedSearchComponent implements OnInit {
  public query: string = '';
  constructor() {}
  @Output() searchTerm = new EventEmitter<string>();

  ngOnInit(): void {}

  search(e: { keyCode: number }): void {
    if (e.keyCode === 13) {
      this.searchTerm.emit(this.query);
    }
  }
}
