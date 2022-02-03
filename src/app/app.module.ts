import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavBarComponent } from './navigation/topNavBar.component';
import { SocialNavBarComponent } from './navigation/socialNavBar.component';
import { storeCarouselComponent } from './carousel/storeCarousel.component';
import { CalendarCardComponent } from './cards/calendarCard/calendarCard.component';
import { NewsCardComponent } from './cards/newsCard/newsCard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SocialNavBarComponent,
    storeCarouselComponent,
    CalendarCardComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
