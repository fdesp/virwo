import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feed-filters',
  templateUrl: './feed-filters.component.html',
  styleUrls: ['./feed-filters.component.css'],
})
export class FeedFiltersComponent implements OnInit {
  public from: string = '';
  public international = true;
  public local = false;
  @Output() filterChange = new EventEmitter<string>();
  @Output() dateChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  datePicked(): void {
    this.dateChange.emit(this.from);
  }

  toggleFilter(): void {
    if (this.international) {
      this.international = false;
      this.local = true;
      this.filterChange.emit('local');
    } else {
      this.local = false;
      this.international = true;
      this.filterChange.emit('international');
    }
  }

  isLocal(): boolean {
    return this.local;
  }

  isInternational(): boolean {
    return this.international;
  }
}
