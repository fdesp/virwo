import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFiltersComponent } from './feed-filters.component';

describe('FeedFiltersComponent', () => {
  let component: FeedFiltersComponent;
  let fixture: ComponentFixture<FeedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
