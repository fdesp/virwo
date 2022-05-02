import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavbarComponent } from './feed-navbar.component';

describe('FeedNavbarComponent', () => {
  let component: FeedNavbarComponent;
  let fixture: ComponentFixture<FeedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
