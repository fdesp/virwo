import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';
import { FeedFiltersComponent } from './feed-filters/feed-filters.component';
import { FeedNavbarComponent } from './feed-navbar/feed-navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, SignupPageComponent, NewsFeedPageComponent, FeedCardComponent, FeedSearchComponent, FeedFiltersComponent, FeedNavbarComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
